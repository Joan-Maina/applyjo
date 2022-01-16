CREATE OR ALTER PROCEDURE [dbo].[addpost]
	@postTitle VARCHAR(255),
    @details VARCHAR(255)
    
AS
SET NOCOUNT ON;
BEGIN
	INSERT INTO [dbo].[blogposts]
	(postTitle, details)
	VALUES
	(@postTitle, @details);
END;

-- GET POSTS
CREATE OR ALTER PROCEDURE [dbo].[fetchposts]
AS
SET NOCOUNT ON;
BEGIN
	SELECT 
    blogposts.postId,blogposts.postTitle, blogposts.details
      FROM [dbo].[blogposts] 
           WHERE blogposts.isDeleted = 0
END;

-- get opportunities
CREATE OR ALTER PROCEDURE [dbo].[fetchallopportunities]

AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
SELECT userId, name, employer, details FROM [dbo].[opportunities] WHERE isDeleted = 0 AND isCompleted = 0
    END;

	-- add opportunities
	CREATE OR ALTER PROCEDURE [dbo].[addopportunity]
@name VARCHAR(255),
@employer VARCHAR(255),
@details VARCHAR(255)
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
INSERT INTO [dbo].[opportunities]
(name, employer, details)
VALUES(
     @name, @employer, @details)
    END;