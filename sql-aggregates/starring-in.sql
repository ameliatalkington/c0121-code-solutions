--List the categories of movies (and how many) that 'Lisa Monroe' appeared in.
--She appeared in a lot of films!
--Your results should include 3 Sports films and 2 Sci-Fi films, plus a lot more!

select  "categories"."name",
        count("filmCategory"."filmId") as "filmsPerCategory"
  from  "actors"
  join  "castMembers" using ("actorId")
  join  "filmCategory" using ("filmId")
  join  "categories" using ("categoryId")
  where "actors"."firstName" = 'Lisa'
    and "actors"."lastName" = 'Monroe'
  group by "categoryId";
