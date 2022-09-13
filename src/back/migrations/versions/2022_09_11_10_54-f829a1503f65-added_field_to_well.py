"""added_field_to_well

Revision ID: f829a1503f65
Revises: 07ea4e2c1209
Create Date: 2022-09-11 10:54:08.087259

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "f829a1503f65"
down_revision = "07ea4e2c1209"
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "well",
        sa.Column(
            "field", sa.String(), nullable=True, comment="название месторождения"
        ),
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("well", "field")
    # ### end Alembic commands ###