import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn 
} from "typeorm";

import { v4 as uuid } from "uuid"

import { Connection } from "./Connections";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
