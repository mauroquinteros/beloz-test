import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '@workshop-management/domain/entities/order.entity';
import { OrderRepository } from '@workshop-management/domain/repositories/order.repository';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderPostgresRepository implements OrderRepository {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly repo: Repository<OrderEntity>,
  ) {}

  getById(id: string): Promise<Order | null> {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<Order[] | null> {
    throw new Error('Method not implemented.');
  }

  async save(order: Order): Promise<void> {
    const orderDb = this.mapToDb(order);
    const newOrder = this.repo.create(orderDb);
    await this.repo.save(newOrder);
  }

  update(id: string, data: Partial<Order>): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  protected mapToDb(model: Order): OrderEntity {
    const order = new OrderEntity();
    order.id = model.id;
    order.status = model.status;
    order.totalPrice = model.totalPrice;
    order.notes = model.notes;
    order.customer = model.customer as any;
    order.vehicle = model.vehicle as any;
    order.repair = model.repair as any;
    return order;
  }
}
