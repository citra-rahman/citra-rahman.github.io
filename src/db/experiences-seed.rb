experiences = [
  {
    date: "2018 - 2018",
    title: "Card Personalization System Engineer . IDEMIA",
    description: "Maintain Card Personalization System for Card Factories",
    tags: "Java",
  },
  {
    date: "2020 - 2021",
    title: "Full Stack Javascript Engineer . Shipsland",
    description: "Develop an order Management System",
    tags: "React JS, Express JS, MongoDB, REST, JEST, AWS EC2",
  },
  {
    date: "2021 - 2023",
    title: "Backend Engineer . Happy5",
    description:
      "Maintain and Add New Features for Performance Management System.",
    tags: "Ruby On Rails, PostgreSQL, Sidekiq, RSpec, Redis, WebSocket, AWS",
  },
  {
    date: "2019 - Present",
    title: "Freelance Web Developer",
    description:
      "Create UI Prototype using For Traject Data Application,Chat Platform: Create Responsive Navigation in the App,TD Status Page React.js Prototype Challenge,JSON API Specification and Documentation for Angular Web Application",
    tags: "React JS, Next JS, Express JS, Swagger",
  },
];

require 'uri'
require 'net/http'
require 'json'

url = URI("http://localhost:3000/api/v1/experiences")
http = Net::HTTP.new(url.host, url.port)
request = Net::HTTP::Post.new(url)

experiences.each do |body|
  request.body = body.to_json
  response = http.request(request)
  puts response.read_body
end