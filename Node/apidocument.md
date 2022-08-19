//page 1

<!-- # Seach (Get)
http://localhost:6780/ -->

# Getting islands(Get)
http://localhost:8000/
https://airbnb-by-rushin.herokuapp.com/

# Getting Beaches (Get)
http://localhost:8000/beach
https://airbnb-by-rushin.herokuapp.com/beach

# Getting Pools (Get)
http://localhost:8000/pools
https://airbnb-by-rushin.herokuapp.com/pool
# Filter
http://localhost:8000/pool?1&gt=2000&lt=20000
https://airbnb-by-rushin.herokuapp.com/?1&gt=2000&lt=5000

http://localhost:8000/beach?1&gt=2000&lt=4000
https://airbnb-by-rushin.herokuapp.com/beach?1&gt=2000&lt=4000

http://localhost:8000/island?1&gt=200&lt=4000
https://airbnb-by-rushin.herokuapp.com/island?1&gt=200&lt=4000
# Sort (Ascending and Descending)
http://localhost:8000/pool?1&gt=2000&lt=20000 (Default)
https://airbnb-by-rushin.herokuapp.com/?1&gt=2000&lt=20000
http://localhost:8000/pool?1&gt=2000&lt=20000&sort=-1 
https://airbnb-by-rushin.herokuapp.com/?1&gt=2000&lt=20000&sort=-1

# Become a Host (Get)
http://localhost:8000/becomehost
https://airbnb-by-rushin.herokuapp.com/becomehost

//page 2

# Getting specific island details (Get)
http://localhost:8000/island/1
    https://airbnb-by-rushin.herokuapp.com/island/1

# Getting specific beaches details (Get)
http://localhost:8000/beach/1
https://airbnb-by-rushin.herokuapp.com/beach/1

# Getting specific Pools details (Get)
http://localhost:8000/pool/1 
https://airbnb-by-rushin.herokuapp.com/pool/1


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
https://airbnb-by-rushin.herokuapp.com/reservestays


//page 4

# Place Booked on basis of _id(Get)
http://localhost:8000/bookings/:id
https://airbnb-by-rushin.herokuapp.com/bookings/id=
# Place Booked on basis of email(Get)
http://localhost:8000/bookings?email=rushi@gmail.com
https://airbnb-by-rushin.herokuapp.com/bookings?email=rushi@gmail.com

//page 5


# Updated data (Put)
http://localhost:6780/update-your-bookings/:id
https://airbnb-by-rushin.herokuapp.com//update-your-bookings/:id


# delete data (delete)
http://localhost:8000/bookings/cancelbooking/:id
https://airbnb-by-rushin.herokuapp.com//cancelbooking/:id'
{"beach_id": "8" ,
            "country_id" :"1",
             "location":"Raigad, India",
             "price" : "24193"}


# login 
https://user-loginapp.herokuapp.com/api/auth/login

# register 
https://user-loginapp.herokuapp.com/api/auth/register

# paytm
https://airbnb-paynow.herokuapp.com/

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