import { get } from 'lodash';
const rData = {
    "R": {
      "res_id": 56618
    },
    "apikey": "fa81a3f97323eba13d8713d3284b8556",
    "id": "56618",
    "name": "AB's - Absolute Barbecues",
    "url": "https://www.zomato.com/bangalore/abs-absolute-barbecues-marathahalli?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
    "location": {
      "address": "90/4, 3rd Floor, Outer Ring Road, Munnekollaly Village, Marathahalli, Bangalore",
      "locality": "Marathahalli",
      "city": "Bangalore",
      "city_id": 4,
      "latitude": "12.9497983000",
      "longitude": "77.6993079000",
      "zipcode": "",
      "country_id": 1,
      "locality_verbose": "Marathahalli, Bangalore"
    },
    "switch_to_order_menu": 0,
    "cuisines": "European, Mediterranean, North Indian, BBQ",
    "average_cost_for_two": 1600,
    "price_range": 3,
    "currency": "Rs.",
    "offers": [],
    "zomato_events": [
      {
        "event": {
          "event_id": 238781,
          "friendly_start_date": "13 November",
          "friendly_end_date": "31 December",
          "friendly_timing_str": "Tuesday, 13th November - Monday, 31st December",
          "start_date": "2018-11-13",
          "end_date": "2018-12-31",
          "end_time": "23:55:00",
          "start_time": "12:00:00",
          "is_active": 1,
          "date_added": "2018-07-25 09:43:51",
          "photos": [
            {
              "photo": {
                "url": "https://b.zmtcdn.com/data/zomato_events/photos/165/855537854daa9559f30ff0cd192d5165_1538224378.jpg",
                "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/165/855537854daa9559f30ff0cd192d5165_1538224378.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "order": 0,
                "md5sum": "855537854daa9559f30ff0cd192d5165",
                "photo_id": 354194,
                "uuid": 1538224188012747,
                "type": "NORMAL"
              }
            },
            {
              "photo": {
                "url": "https://b.zmtcdn.com/data/zomato_events/photos/3c6/b4e17ffd9f0d389dc056d066359463c6_1532492031.jpg",
                "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/3c6/b4e17ffd9f0d389dc056d066359463c6_1532492031.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                "order": 1,
                "md5sum": "b4e17ffd9f0d389dc056d066359463c6",
                "photo_id": 330198,
                "uuid": 1532491997343903,
                "type": "NORMAL"
              }
            }
          ],
          "restaurants": [],
          "is_valid": 1,
          "share_url": "http://www.zoma.to/r/0",
          "show_share_url": 0,
          "title": "Events, Group Deals and Offers",
          "description": "Group Deals\n1) Now Pay for 30 for a Group of 35 Offer Valid for All Days All Sessions. \n2) Now Pay for 18 for a Group of 20 Offer Valid for Monday Tuesday and Thursday Only.\n\nOffers\n1) Now You can Choose a Beer or a 30ml of Whisky Teachers Highland Cream in Early Bird Offer. Wednesday to Sunday.",
          "display_time": "12:00 pm - 11:55 pm",
          "display_date": "13 November - 31 December",
          "is_end_time_set": 1,
          "disclaimer": "Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations/ modifications/ complaints.",
          "event_category": 0,
          "event_category_name": "",
          "book_link": "",
          "share_data": {
            "should_show": 0
          }
        }
      }
    ],
    "opentable_support": 0,
    "is_zomato_book_res": 0,
    "mezzo_provider": "OTHER",
    "is_book_form_web_view": 0,
    "book_form_web_view_url": "",
    "book_again_url": "",
    "thumb": "https://b.zmtcdn.com/data/pictures/8/56618/d1fabc4669318bc940749ff735359327.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "user_rating": {
      "aggregate_rating": "4.8",
      "rating_text": "Excellent",
      "rating_color": "3F7E00",
      "votes": "11226"
    },
    "photos_url": "https://www.zomato.com/bangalore/abs-absolute-barbecues-marathahalli/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
    "menu_url": "https://www.zomato.com/bangalore/abs-absolute-barbecues-marathahalli/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
    "featured_image": "https://b.zmtcdn.com/data/pictures/8/56618/d1fabc4669318bc940749ff735359327.jpg",
    "medio_provider": 1,
    "has_online_delivery": 0,
    "is_delivering_now": 0,
    "include_bogo_offers": true,
    "deeplink": "zomato://restaurant/56618",
    "is_table_reservation_supported": 1,
    "has_table_booking": 1,
    "book_url": "https://www.zomato.com/bangalore/abs-absolute-barbecues-marathahalli/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
    "events_url": "https://www.zomato.com/bangalore/abs-absolute-barbecues-marathahalli/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
  }
const detaildata =
  {
    "user_reviews": [
      {
        "review": {
          "rating": 4,
          "review_text": "The place is great for the food spread and definitely value for money and jolly good time to spend with friends and family alike ..The only ...",
          "id": 40259946,
          "rating_color": "5BA829",
          "review_time_friendly": "yesterday",
          "rating_text": "Great!",
          "timestamp": 1543109351,
          "likes": 0,
          "user": {
            "name": "Anjan AK",
            "foodie_level": "Foodie",
            "foodie_level_num": 3,
            "foodie_color": "ffd35d",
            "profile_url": "https://www.zomato.com/users/anjan-ak-27817969?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/ce2/fcea5acaf5fcbae7ed752e263b56ece2.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            "profile_deeplink": "zomato://u/27817969"
          },
          "comments_count": 0
        }
      },
      {
        "review": {
          "rating": 5,
          "review_text": "Everything is good.. i recommend others to visit..services are good.server Vikram is excellent.much recommendable..our pleasure to visit abs...",
          "id": 40246915,
          "rating_color": "305D02",
          "review_time_friendly": "2 days ago",
          "rating_text": "Insane!",
          "timestamp": 1543052721,
          "likes": 0,
          "user": {
            "name": "Raghu B",
            "foodie_level": "Foodie",
            "foodie_level_num": 2,
            "foodie_color": "ffd35d",
            "profile_url": "https://www.zomato.com/users/raghu-b-65418260?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/abb/5f7737b279cad79f30c995d6399c5abb.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            "profile_deeplink": "zomato://u/65418260"
          },
          "comments_count": 0
        }
      },
      {
        "review": {
          "rating": 5,
          "review_text": "Great service..Pampered us right from the start till the end ...and food was the best...awesome experience....Chandan Das catered to our nee...",
          "id": 40246888,
          "rating_color": "305D02",
          "review_time_friendly": "2 days ago",
          "rating_text": "Insane!",
          "timestamp": 1543052653,
          "likes": 0,
          "user": {
            "name": "Rupali Vignesh",
            "foodie_level": "Foodie",
            "foodie_level_num": 2,
            "foodie_color": "ffd35d",
            "profile_url": "https://www.zomato.com/users/rupali-vignesh-51992266?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "profile_image": "https://b.zmtcdn.com/images/user_avatars/pizza_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "profile_deeplink": "zomato://u/51992266"
          },
          "comments_count": 0
        }
      },
      {
        "review": {
          "rating": 5,
          "review_text": null,
          "id": 40246539,
          "rating_color": "305D02",
          "review_time_friendly": "2 days ago",
          "rating_text": "Insane!",
          "timestamp": 1543051722,
          "likes": 0,
          "user": {
            "name": "Binoy Av",
            "foodie_level": "Foodie",
            "foodie_level_num": 2,
            "foodie_color": "ffd35d",
            "profile_url": "https://www.zomato.com/users/binoy-av-3964601?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "profile_image": "https://b.zmtcdn.com/images/user_avatars/cupcake.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "profile_deeplink": "zomato://u/3964601"
          },
          "comments_count": 0
        }
      },
      {
        "review": {
          "rating": 5,
          "review_text": "The food overall was very tasty.enjoyed the lunch with family @AB's, Maratha Halli. Vikram was attending us and took care of us well. Highly...",
          "id": 40245527,
          "rating_color": "305D02",
          "review_time_friendly": "2 days ago",
          "rating_text": "Insane!",
          "timestamp": 1543048505,
          "likes": 0,
          "user": {
            "name": "Vincent Raj",
            "foodie_level": "Foodie",
            "foodie_level_num": 2,
            "foodie_color": "ffd35d",
            "profile_url": "https://www.zomato.com/users/vincent-raj-31741407?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "profile_image": "https://b.zmtcdn.com/data/user_profile_pictures/761/7b49ca5be7b3813a506e2d9bf6f00761.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            "profile_deeplink": "zomato://u/31741407"
          },
          "comments_count": 0
        }
      }
    ],
    "review_count": 6214,
    "review_start": 0,
    "review_shown": 5
  }


const mapStateToProp = state => {
    debugger;
    return {
        details: state.restaurantDetails,
        reviews: get(state.restaurantReviews, "user_reviews"),
        review_count: state.restaurantReviews.review_count,
        review_start: state.restaurantReviews.review_start,
        review_shown: state.restaurantReviews.review_shown,
    };
}
export default mapStateToProp