CREATE OR REPLACE VIEW V_Devices as
SELECT "Device", "Device Location ID", "Phase ID", "Project ID" 
from proj1.tbldevices 
where "Active" = 1 
and "Phase ID" != 20
and "Device" not like '%Dummy%'
and "Device" not like '%SCN%'
and "Device Location ID" is not null
UNION ALL
SELECT "Device", "Device Location ID", "Phase ID", "Project ID" 
from proj2.tbldevices 
where "Active" = 1 
and "Phase ID" != 20 
and "Device" not like '%Dummy%' 
and "Device" not like '%SCN%'
and "Device Location ID" is not null
UNION ALL
SELECT "Device", "Device Location ID", "Phase ID", "Project ID"
from proj3.tbldevices
where "Active" = 1
and "Phase ID" != 20
and "Device" not like '%Dummy%'
and "Device" not like '%SCN%'
and "Device Location ID" is not null
UNION ALL
SELECT "Device", "Device Location ID", "Phase ID", "Project ID"
from proj4.tbldevices
where "Active" = 1
and "Phase ID" != 20
and "Device" not like '%Dummy%'
and "Device" not like '%SCN%'
and "Device Location ID" is not null
UNION ALL
SELECT "Device", "Device Location ID", "Phase ID", "Project ID"
from proj5.tbldevices
where "Active" = 1
and "Phase ID" != 20
and "Device" not like '%Dummy%'
and "Device" not like '%SCN%'
and "Device Location ID" is not null
UNION ALL
SELECT "Device", "Device Location ID", "Phase ID", "Project ID" 
from proj6.tbldevices 
where "Active" = 1 
and "Phase ID" != 20 
and "Device" not like '%Dummy%' 
and "Device" not like '%SCN%'
and "Device Location ID" is not null
UNION ALL
SELECT "Device", "Device Location ID", "Phase ID", "Project ID" 
from proj7.tbldevices 
where "Active" = 1 
and "Phase ID" != 20 
and "Device" not like '%Dummy%' 
and "Device" not like '%SCN%'
and "Device Location ID" is not null;
