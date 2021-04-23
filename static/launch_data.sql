select * from launch_data 

alter table launch_data alter column launch_date_utc type date USING launch_date_utc::date ;
