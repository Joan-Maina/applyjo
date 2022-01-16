CREATE OR ALTER PROCEDURE [dbo].[getuser]
	@email VARCHAR(255)
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	SELECT *
        FROM [dbo].[userDetails]
            WHERE email = @email AND isDeleted = 0
END;

-- GET USERS

CREATE OR ALTER PROCEDURE [dbo].[getusers]
	@email VARCHAR(255)
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	SELECT fullname, username, email, isAdmin, employer
        FROM [dbo].[userDetails]
            WHERE isDeleted = 0 AND email != @email
END;
