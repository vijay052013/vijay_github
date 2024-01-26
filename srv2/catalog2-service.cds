using {capapp.db as db} from '../db/data-model';

service Catalog2Service @(path : '/catalog2')
{
    entity Students
      as select * from db.Students
    ;

};
