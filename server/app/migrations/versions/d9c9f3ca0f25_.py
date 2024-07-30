"""empty message

Revision ID: d9c9f3ca0f25
Revises: f4afa40b2e79
Create Date: 2024-07-30 22:34:40.432719

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd9c9f3ca0f25'
down_revision: Union[str, None] = 'f4afa40b2e79'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('rooms')
    op.create_table('rooms',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('status', sa.String(), nullable=False),
    sa.Column('max_players', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_index(op.f('ix_rooms_id'), 'rooms', ['id'], unique=False)

    with op.batch_alter_table('users') as batch_op :
        batch_op.add_column(sa.Column('room_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key('fk_users_room_id', 'rooms',['room_id'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.drop_column('users', 'room_id')
    op.drop_index(op.f('ix_rooms_id'), table_name='rooms')
    op.drop_table('rooms')
    # ### end Alembic commands ###
