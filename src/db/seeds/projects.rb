projects = [
  {
    name: "Traject Data Application",
    imgPath: "/traject-data.png",
    description:
      "Web Prototype challenge by Top Coder, built using React JS and Material UI.",
    link: "https://wonderful-alfajores-4e26f4.netlify.app",
  },
  {
    name: "To Do Application",
    imgPath: "/todo-app-web.png",
    description:
      "Simple To Do Web Application built using ReactJS (Front End) and Firebase (Back End).",
    link: "https://todoist-34829.web.app/",
  },
  {
    name: "Covid-19 101",
    imgPath: "/covid19.png",
    description:
      "A responsive website of Covid-19 to increase awareness of corona virus built with NextJS.",
    link: "https://covid101.netlify.app/",
  },
  {
    name: "Shipsland OMS",
    imgPath: "/shipsland.png",
    description:
      "An Order Management System to manage order from all e-commerce platforms. Built with ReactJS (front-end), Node Js (Backend).",
    link: "https://shipsland.netlify.app/",
  }
];

require 'uri'
require 'net/http'
require 'json'

url = URI("http://localhost:3000/api/v1/projects")
http = Net::HTTP.new(url.host, url.port)
request = Net::HTTP::Post.new(url)

projects.each do |body|
  request.body = body.to_json
  response = http.request(request)
  puts response.read_body
end