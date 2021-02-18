import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer TKTgHGjDSek3gITOmaZ4jdsmMZ_Xi1tYHomzwXqtJbDG_3CnZDu6542RuCaBN7yBTTZHnrfnc3GMKbGJsoaUzwcdSUWpmBW9Q0F68UlN_4XcaTScOtbMGPobsPcrYHYx',
  },
});
