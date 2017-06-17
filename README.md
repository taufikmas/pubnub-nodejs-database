# pubnub-nodejs-database
save realtime data pubnub to database --fixed



this file according to pubnub with javascript, https://github.com/pubnub/javascript/tree/master_3x 1.need setup pubnub key subkey : demo-36 pubkey : demo-36 channel: demo-361

i wanna store the data from pubnub to database mysql or mongodb.

    make db on mysql with xampp

-- -- Database: pbss
-- -- Table structure for table inboxpub

CREATE TABLE inboxpub ( id bigint(20) UNSIGNED NOT NULL, pengirim varchar(10) NOT NULL, data varchar(255) NOT NULL, waktu varchar(255) NOT NULL, format varchar(20) NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

if you will store to mongodb, with database 'pbss' collection 'inboxpub'

3.place the .js file in "javascript-master_3x" folder.

4.run "node filename.js" in terminal ex. for sql 

PS C:\nodejs\javascript-master_3x> node .\subscribe_wildcard_fix_sql.js





for mongodb 
database: pbss
collection: tb_client, tb_inboxpub


PS C:\nodejs\javascript-master_3x> node .\subscribe_wildcard_fix_mongo.js
