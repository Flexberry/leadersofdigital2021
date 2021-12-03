



CREATE TABLE "ChatBotMessage"
(

	"primaryKey" RAW(16) NOT NULL,

	"DateTime" DATE NULL,

	"Text" NVARCHAR2(255) NULL,

	"ChatMessageType" NVARCHAR2(6) NULL,

	"Person" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Person"
(

	"primaryKey" RAW(16) NOT NULL,

	"EsiaId" NVARCHAR2(255) NULL,

	"Name" NVARCHAR2(255) NULL,

	"MiddleName" NVARCHAR2(255) NULL,

	"Surname" NVARCHAR2(255) NULL,

	"Birthday" DATE NULL,

	"Sex" NVARCHAR2(7) NULL,

	"Reputation" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "RequestPersonData"
(

	"primaryKey" RAW(16) NOT NULL,

	"Body" NVARCHAR2(255) NULL,

	"Result" NVARCHAR2(255) NULL,

	"Person" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "PersonAccount"
(

	"primaryKey" RAW(16) NOT NULL,

	"AccountId" NVARCHAR2(255) NULL,

	"SocialNetwork" RAW(16) NOT NULL,

	"Person" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "PersonMetaData"
(

	"primaryKey" RAW(16) NOT NULL,

	"Url" NVARCHAR2(255) NULL,

	"DateTime" DATE NULL,

	"DataType" NVARCHAR2(13) NULL,

	"Person" RAW(16) NULL,

	"Author" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "SocialNetwork"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAG"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(80) NOT NULL,

	"Login" nvarchar2(50) NULL,

	"Pwd" nvarchar2(50) NULL,

	"IsUser" NUMBER(1) NOT NULL,

	"IsGroup" NUMBER(1) NOT NULL,

	"IsRole" NUMBER(1) NOT NULL,

	"ConnString" nvarchar2(255) NULL,

	"Enabled" NUMBER(1) NULL,

	"Email" nvarchar2(80) NULL,

	"Comment" CLOB NULL,

	"CreateTime" DATE NULL,

	"Creator" nvarchar2(255) NULL,

	"EditTime" DATE NULL,

	"Editor" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMLG"
(

	"primaryKey" RAW(16) NOT NULL,

	"Group_m0" RAW(16) NOT NULL,

	"User_m0" RAW(16) NOT NULL,

	"CreateTime" DATE NULL,

	"Creator" nvarchar2(255) NULL,

	"EditTime" DATE NULL,

	"Editor" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAuObjType"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAuEntity"
(

	"primaryKey" RAW(16) NOT NULL,

	"ObjectPrimaryKey" nvarchar2(38) NOT NULL,

	"OperationTime" DATE NOT NULL,

	"OperationType" nvarchar2(100) NOT NULL,

	"ExecutionResult" nvarchar2(12) NOT NULL,

	"Source" nvarchar2(255) NOT NULL,

	"SerializedField" nvarchar2(2000) NULL,

	"User_m0" RAW(16) NOT NULL,

	"ObjectType_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAuField"
(

	"primaryKey" RAW(16) NOT NULL,

	"Field" nvarchar2(100) NOT NULL,

	"OldValue" nvarchar2(2000) NULL,

	"NewValue" nvarchar2(2000) NULL,

	"MainChange_m0" RAW(16) NULL,

	"AuditEntity_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ChatBotMessage"
	ADD CONSTRAINT "ChatBotMessage_FPerson_0" FOREIGN KEY ("Person") REFERENCES "Person" ("primaryKey");

CREATE INDEX "ChatBotMessage_IPerson" on "ChatBotMessage" ("Person");

ALTER TABLE "RequestPersonData"
	ADD CONSTRAINT "RequestPersonData_FPerson_0" FOREIGN KEY ("Person") REFERENCES "Person" ("primaryKey");

CREATE INDEX "RequestPersonData_IPerson" on "RequestPersonData" ("Person");

ALTER TABLE "PersonAccount"
	ADD CONSTRAINT "PersonAccount_FSocialNetwork_0" FOREIGN KEY ("SocialNetwork") REFERENCES "SocialNetwork" ("primaryKey");

CREATE INDEX "PersonAccount_ISocialNetwork" on "PersonAccount" ("SocialNetwork");

ALTER TABLE "PersonAccount"
	ADD CONSTRAINT "PersonAccount_FPerson_0" FOREIGN KEY ("Person") REFERENCES "Person" ("primaryKey");

CREATE INDEX "PersonAccount_IPerson" on "PersonAccount" ("Person");

ALTER TABLE "PersonMetaData"
	ADD CONSTRAINT "PersonMetaData_FPerson_0" FOREIGN KEY ("Person") REFERENCES "Person" ("primaryKey");

CREATE INDEX "PersonMetaData_IPerson" on "PersonMetaData" ("Person");

ALTER TABLE "PersonMetaData"
	ADD CONSTRAINT "PersonMetaData_FPerson_1" FOREIGN KEY ("Author") REFERENCES "Person" ("primaryKey");

CREATE INDEX "PersonMetaData_IAuthor" on "PersonMetaData" ("Author");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMLG"
	ADD CONSTRAINT "STORMLG_FSTORMAG_0" FOREIGN KEY ("Group_m0") REFERENCES "STORMAG" ("primaryKey");

ALTER TABLE "STORMLG"
	ADD CONSTRAINT "STORMLG_FSTORMAG_1" FOREIGN KEY ("User_m0") REFERENCES "STORMAG" ("primaryKey");

ALTER TABLE "STORMAuEntity"
	ADD CONSTRAINT "STORMAuEntity_FSTORMAG_0" FOREIGN KEY ("User_m0") REFERENCES "STORMAG" ("primaryKey");

ALTER TABLE "STORMAuEntity"
	ADD CONSTRAINT "STORMAuEntity_FSTORMAuObj_3287" FOREIGN KEY ("ObjectType_m0") REFERENCES "STORMAuObjType" ("primaryKey");

ALTER TABLE "STORMAuField"
	ADD CONSTRAINT "STORMAuField_FSTORMAuField_0" FOREIGN KEY ("MainChange_m0") REFERENCES "STORMAuField" ("primaryKey");

ALTER TABLE "STORMAuField"
	ADD CONSTRAINT "STORMAuField_FSTORMAuEntity_0" FOREIGN KEY ("AuditEntity_m0") REFERENCES "STORMAuEntity" ("primaryKey");


