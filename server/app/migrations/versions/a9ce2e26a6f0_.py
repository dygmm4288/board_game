"""empty message

Revision ID: a9ce2e26a6f0
Revises: 
Create Date: 2024-07-25 22:24:27.816713

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.engine import reflection



# revision identifiers, used by Alembic.
revision: str = 'a9ce2e26a6f0'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None



def upgrade():
    # Reflect the current state of the database
    conn = op.get_bind()
    inspector = reflection.Inspector.from_engine(conn)

    # Check if the 'rooms' table exists
    if 'rooms' in inspector.get_table_names():
        op.drop_table('rooms')

    # Now, create the 'rooms' table with the desired schema
    op.create_table(
        'rooms',
        sa.Column('room_num', sa.Integer(), nullable=False),
        sa.Column('id', sa.String(), nullable=False),
        sa.Column('status', sa.String(), nullable=False),
        sa.Column('max_players', sa.Integer(), nullable=False),
        sa.Column('game_name', sa.String(), nullable=False),
        sa.Column('created_by', sa.String(), nullable=False),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('room_num')
    )

def downgrade():
    op.drop_table('rooms')
