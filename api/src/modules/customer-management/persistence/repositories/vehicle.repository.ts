import { Repository } from 'typeorm';
import { VehicleRepository } from '@customer-management/domain/repositories/vehicle.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from '@customer-management/domain/entities/vehicle.entity';
import { VehicleEntity } from '../entities/vehicle.entity';
import { CustomerEntity } from '../entities/customer.entity';
import { Customer } from '@customer-management/domain/entities/customer.entity';

export class VehiclePostgresRepositoryy implements VehicleRepository {
  constructor(
    @InjectRepository(VehicleEntity)
    private readonly repo: Repository<VehicleEntity>,
  ) {}

  async getById(id: string): Promise<Vehicle | null> {
    const vehicle = await this.repo.findOne({
      where: { id },
      relations: ['customer'],
    });
    if (!vehicle) {
      return null;
    }
    return this.mapToDomain(vehicle);
  }

  async getAll(): Promise<Vehicle[] | null> {
    const vehicles = await this.repo.find({ relations: ['customer'] });
    if (!vehicles) {
      return null;
    }
    return vehicles.map((vehicle) => this.mapToDomain(vehicle));
  }

  async save(vehicle: Vehicle): Promise<void> {
    const vehicleDb = this.mapToDb(vehicle);
    const newVehicle = this.repo.create(vehicleDb);
    await this.repo.save(newVehicle);
  }

  async update(id: string, data: Vehicle): Promise<void> {
    const updateData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined),
    ) as Partial<VehicleEntity>;

    if (Object.keys(updateData).length === 0) {
      throw new Error('There is no data to update');
    }

    await this.repo.update({ id }, updateData);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  protected mapToDomain(model: VehicleEntity): Vehicle {
    return Vehicle.create({
      id: model.id,
      license: model.license,
      make: model.make,
      year: model.year,
      customer: Customer.create({
        id: model.customer.id,
        name: model.customer.name,
        email: model.customer.email,
        phone: model.customer.phone,
        address: model.customer.address,
      }),
    });
  }

  protected mapToDb(entity: Vehicle): VehicleEntity {
    const vehicle = new VehicleEntity();
    vehicle.id = entity.id;
    vehicle.license = entity.license;
    vehicle.make = entity.make;
    vehicle.year = entity.year;

    if (entity.customer) {
      const customer = new CustomerEntity();
      customer.id = entity.customer.id;
      customer.name = entity.customer.name;
      customer.email = entity.customer.email;
      customer.phone = entity.customer.phone;
      customer.address = entity.customer.address;

      vehicle.customer = customer;
    }
    return vehicle;
  }
}
