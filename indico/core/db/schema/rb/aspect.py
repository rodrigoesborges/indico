# -*- coding: utf-8 -*-
##
##
## This file is part of Indico.
## Copyright (C) 2002 - 2013 European Organization for Nuclear Research (CERN).
##
## Indico is free software; you can redistribute it and/or
## modify it under the terms of the GNU General Public License as
## published by the Free Software Foundation; either version 3 of the
## License, or (at your option) any later version.
##
## Indico is distributed in the hope that it will be useful, but
## WITHOUT ANY WARRANTY; without even the implied warranty of
## MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
## General Public License for more details.
##
## You should have received a copy of the GNU General Public License
## along with Indico;if not, see <http://www.gnu.org/licenses/>.

"""
A view of map of rooms in a specific location
"""

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String

from indico.core.db.schema import Base


class Aspect(Base):
    __tablename__ = 'aspects'

    id = Column(Integer, primary_key=True)

    name = Column(String, nullable=False)
    default_on_startup = Column(Boolean, default=False)
    center_latitude = Column(String)
    center_longitude = Column(String)
    zoom_level = Column(String)
    topLeftLatitude = Column(String)
    topLeftLongitude = Column(String)
    bottomRightLatitude = Column(String)
    bottomRightLongitude = Column(String)

    location_id = Column(Integer, ForeignKey('locations.id'))
