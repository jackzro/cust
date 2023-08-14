import {MigrationInterface, QueryRunner} from "typeorm";

export class showoncustomerTable1661354628843 implements MigrationInterface {
    name = 'showoncustomerTable1661354628843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`show\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` DROP FOREIGN KEY \`FK_e7982f1c4b62bb80b1aeeeb2bc7\``);
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` CHANGE \`customersId\` \`customersId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` ADD CONSTRAINT \`FK_e7982f1c4b62bb80b1aeeeb2bc7\` FOREIGN KEY (\`customersId\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` DROP FOREIGN KEY \`FK_e7982f1c4b62bb80b1aeeeb2bc7\``);
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` CHANGE \`customersId\` \`customersId\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`cdrmonths\` ADD CONSTRAINT \`FK_e7982f1c4b62bb80b1aeeeb2bc7\` FOREIGN KEY (\`customersId\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`show\``);
    }

}
