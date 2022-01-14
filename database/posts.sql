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
    blogposts.postId,blogposts.postTitle, blogposts.details, blogcomments.details
      FROM [dbo].[blogposts] INNER JOIN [dbo].[blogcomments] ON [blogposts].[postId] = [blogcomments].[postId] 
           WHERE blogposts.isDeleted = 0
END;