
CREATE OR ALTER PROCEDURE [dbo].[registeruser]
	@fullname varchar(50),
	@username varchar(50),
	@email varchar(255),
	@password varchar(255)
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	INSERT INTO [dbo].[userDetails]
	(fullname, username, email,password)
	VALUES
	(@fullname, @username, @email, @password);
END;