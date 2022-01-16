CREATE OR ALTER PROCEDURE [dbo].[addcomment]
@details VARCHAR(255),
@postId INT
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	INSERT INTO [dbo].[blogcomments]
    (details, postId)
VALUES
(@details, @postId)
    END;

-- FETCH COMMMENTS
	CREATE OR ALTER PROCEDURE [dbo].[fetchcomments]
    @postid VARCHAR(255)
AS
SET NOCOUNT ON;
BEGIN
	SELECT 
     blogcomments.commentId,blogcomments.details
      FROM [dbo].[blogcomments] 
           WHERE blogcomments.postId = @postid 
END;