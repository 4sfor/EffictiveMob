import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Users } from '../models/user.model';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class AppService {
  constructor(
    @InjectModel(Users) private readonly userModel: typeof Users,
    private readonly sequelize: Sequelize,
  ) {}

  async updateProblems(): Promise<number> {
    try {
      const data = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        const result = await this.sequelize.query(
          `
          WITH updated_users AS (
          UPDATE "Users"
          SET problem = false
          WHERE problem = true
          RETURNING *
        )
        SELECT COUNT(*) AS count FROM updated_users;
        `,
          transactionHost,
        )
        return result[0][0]['count'];
      });
      console.log(data)
      return data
    } catch (error) {
      throw error;
    }
  }
}
