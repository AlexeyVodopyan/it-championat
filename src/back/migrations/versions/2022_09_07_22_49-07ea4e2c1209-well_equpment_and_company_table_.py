"""well, equpment and company table generated

Revision ID: 07ea4e2c1209
Revises: 68ec44b601a9
Create Date: 2022-09-07 22:49:43.315206

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
import sqlalchemy_utils
from src.back.tables import company, well

# revision identifiers, used by Alembic.
revision = '07ea4e2c1209'
down_revision = '68ec44b601a9'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('company',
    sa.Column('id', postgresql.UUID(as_uuid=True), nullable=False, comment='Идентификатор компании'),
    sa.Column('name', sa.String(), nullable=True, comment='Название компании'),
    sa.Column('type', sqlalchemy_utils.types.choice.ChoiceType(choices=company.CompanyType), nullable=False, comment='Тип компании'),
    sa.PrimaryKeyConstraint('id'),
    comment='Таблица компаний'
    )
    op.create_table('well',
    sa.Column('id', postgresql.UUID(as_uuid=True), nullable=False, comment='Идентификатор скважины'),
    sa.Column('status', sqlalchemy_utils.types.choice.ChoiceType(well.WellDrillingStatus), nullable=True, comment='Статус строительства скважины'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('equipment',
    sa.Column('id', postgresql.UUID(as_uuid=True), nullable=False, comment='Идентификатор оборудования'),
    sa.Column('name', sa.String(), nullable=True, comment='Название оборудования'),
    sa.Column('lifetime', sa.INTEGER(), nullable=True, comment='Срок службы оборудования'),
    sa.Column('user_note', sa.String(), nullable=True, comment='Заметки пользователя'),
    sa.Column('owner_id', postgresql.UUID(as_uuid=True), nullable=True),
    sa.Column('well_id', postgresql.UUID(as_uuid=True), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['company.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['well_id'], ['well.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id'),
    comment='Таблица оборудования'
    )
    op.create_table('equipment_schedule',
    sa.Column('id', postgresql.UUID(as_uuid=True), nullable=False, comment='Идентификатор записи'),
    sa.Column('work_started', sa.DATE(), nullable=True, comment='Дата начала работ'),
    sa.Column('work_finished', sa.DATE(), nullable=True, comment='Дата конца работ'),
    sa.Column('equipment_id', postgresql.UUID(as_uuid=True), nullable=True),
    sa.ForeignKeyConstraint(['equipment_id'], ['equipment.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('telemetry', sa.Column('well_id', postgresql.UUID(as_uuid=True), nullable=True))
    op.create_foreign_key(None, 'telemetry', 'well', ['well_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'telemetry', type_='foreignkey')
    op.drop_column('telemetry', 'well_id')
    op.drop_table('equipment_schedule')
    op.drop_table('equipment')
    op.drop_table('well')
    op.drop_table('company')
    # ### end Alembic commands ###
