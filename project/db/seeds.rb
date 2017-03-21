# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Assignment.destroy_all

user_one = User.create({
  email: 'andrew@email.com',
  password: 'password',
  password_confirmation: 'password',
  username: 'Andrew'
  })

user_one.assignments.create({
  title: "Project-1-Full-Stack-Challenge-Tracker-Ruby",
  img: "bob",
  description: "Full-Stack-Web-App",
  frontend: "Html and Css",
  backend: "Ruby, Sql and Sinatra",
  gitlink: "https://github.com/andrewrlonsdale/Project-1-Full-Stack-Challenge-Tracker-Ruby",
  projectlink: "bob"
  })

user_one.assignments.create({
  title: "Project-2-Full-Stack-Card-Game-Java",
  img: "bob",
  description: "
  Blackjack card game created in Android studio
",
  frontend: "Java",
  backend: "Java",
  gitlink: "https://github.com/andrewrlonsdale/Project-2-Full-Stack-Card-Game-Java",
  projectlink: "bob"
  })

user_one.assignments.create({
  title: "Project-3-Full-Stack-Educational-App-Javascript",
  img: "bob",
  description: "The history of video games: a timeline
An interactive webpage that takes the user on a journey through the colourful history of all things GAME.
#MVP
Be able to scroll through a timeline which details the most noteworthy events in the history of video games, and click through to each event to see more detail.",
  frontend: "Javascript-html-css-",
  backend: "Javascript, npm, mongodb, webpack, and custom-Api",
  gitlink: "https://github.com/andrewrlonsdale/Project-3-Full-Stack-Educational-App-Javascript",
  projectlink: "bob"
  })

user_one.assignments.create({
  title: "Circuit-Side-Project",
  img: "circuit.png",
  description: "",
  frontend: "Html, Css, and sass",
  backend: " jquery, php and Javascript",
  gitlink: "https://github.com/andrewrlonsdale/Circuit-Side-Project",
  projectlink: "http://circuit-audio.com/"
  })
