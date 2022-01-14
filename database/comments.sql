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
