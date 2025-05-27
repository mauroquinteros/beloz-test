import { Order } from '../entities/order.entity';

export interface OrderRepository {
  getById(id: string): Promise<Order | null>;
  getAll(): Promise<Order[] | null>;
  save(order: Order): Promise<void>;
  update(id: string, data: Partial<Order>): Promise<void>;
  delete(id: string): Promise<void>;
}
