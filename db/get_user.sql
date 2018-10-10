SELECT * FROM users u
INNER JOIN posts p ON p.postid = u.userid;