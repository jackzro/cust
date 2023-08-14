import {MigrationInterface, QueryRunner} from "typeorm";

export class ManytoOne1661391547090 implements MigrationInterface {
    name = 'ManytoOne1661391547090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usertocustomers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`usid\` varchar(255) NOT NULL, \`cusid\` varchar(255) NOT NULL, \`customerId\` varchar(36) NULL, \`userId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` DROP FOREIGN KEY \`FK_e7982f1c4b62bb80b1aeeeb2bc7\``);
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` CHANGE \`customersId\` \`customersId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`usertocustomers\` ADD CONSTRAINT \`FK_4681791aba706d9cd35a2547297\` FOREIGN KEY (\`customerId\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usertocustomers\` ADD CONSTRAINT \`FK_49b7110bf2a0d6a4c45db99e6e8\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` ADD CONSTRAINT \`FK_e7982f1c4b62bb80b1aeeeb2bc7\` FOREIGN KEY (\`customersId\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` DROP FOREIGN KEY \`FK_e7982f1c4b62bb80b1aeeeb2bc7\``);
        await queryRunner.query(`ALTER TABLE \`usertocustomers\` DROP FOREIGN KEY \`FK_49b7110bf2a0d6a4c45db99e6e8\``);
        await queryRunner.query(`ALTER TABLE \`usertocustomers\` DROP FOREIGN KEY \`FK_4681791aba706d9cd35a2547297\``);
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` CHANGE \`customersId\` \`customersId\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` ADD CONSTRAINT \`FK_e7982f1c4b62bb80b1aeeeb2bc7\` FOREIGN KEY (\`customersId\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`usertocustomers\``);
    }

}
