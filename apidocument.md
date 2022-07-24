//page 1

<!-- # Seach (Get)
http://localhost:6780/ -->

# Getting islands(Get)
http://localhost:8000/

# Getting Beaches (Get)
http://localhost:8000/beach

# Getting Pools (Get)
http://localhost:8000/pools
# Filter
http://localhost:8000/pool?1&gt=2000&lt=20000
http://localhost:8000/beach?1&gt=2000&lt=4000
http://localhost:8000/island?1&gt=200&lt=4000
# Sort (Ascending and Descending)
http://localhost:8000/pool?1&gt=2000&lt=20000 (Default)
http://localhost:8000/pool?1&gt=2000&lt=20000&sort=-1 

# Become a Host (Get)
http://localhost:6780/becomehost


//page 2

# Getting specific island details (Get)
http://localhost:8000?islandid=1

# Getting specific beaches details (Get)
http://localhost:8000/beach?beachid=1

# Getting specific Pools details (Get)
http://localhost:8000/pool?poolid=1 


//page 3
# Check Out (Post)
http://localhost:8000/reservestays
{
    "name" : "Rushi",
    "email" : "rushi@gmail.com",
    "phone" : "980",
    "location_name" : "Calanguhante, Ireland",
    "beach_id": "814",
    "country_id" : "18",
     "price" : "98000"
}



//page 4

# Place Booked on basis of _id(Get)
http://localhost:8000/bookings?id=

# Place Booked on basis of email(Get)
http://localhost:8000/bookings?email=rushi@gmail.com


//page 5


# Updated data (Put)
http://localhost:6780/upd

# delete data (delete)
http://localhost:8000/bookings/62dbf8baee43e0cea3235ba1

{"beach_id": "8" ,
            "country_id" :"1",
             "location":"Raigad, India",
             "price" : "24193"}




<!-- [
    {
        "_id": "62dbf7feee43e0cea3235ba0",
        "name": "Rushi",
        "email": "rushi@gmail.com",
        "phone": "123",
        "location_name": "Cabin in Big River, Canada",
        "beach_id": "15",
        "country_id": "14",
        "price": "86000"
    },
    {
        "_id": "62dbf8baee43e0cea3235ba1",
        "name": "Dipak",
        "email": "dipak@gmail.com",
        "phone": "980",
        "location_name": "Calanguhante, Ireland",
        "beach_id": "814",
        "country_id": "18",
        "price": "98000"
    }
] -->