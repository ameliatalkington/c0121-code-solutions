select  "filmId",
        "title"
  from  "films"
  where "rentalRate" < 1
  order by "filmId" asc
  limit 50;
