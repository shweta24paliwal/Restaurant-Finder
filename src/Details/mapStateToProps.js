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

const mapStateToProp = state => {
    debugger;
    return {
        details:rData || state.restaurantDetails
    };
}
export default mapStateToProp