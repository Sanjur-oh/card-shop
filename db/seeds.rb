# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "faker"

User.destroy_all

# 10.times do
#   User.create([{
#     email: Faker::Internet.email,
#     password_digest: Faker::Internet.password(min_length: 10, max_length: 20),
#     username: Faker::Internet.username(specifier: 5..10)


#   }])
# end

Shoe.create!([{
  shoeName:"Nike Dunk Low Retro White Black",
    brand:"Nike",
    colorway:"White/Black",
    retailPrice:110,
    image_url:"https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/445/310/original/719082_01.jpg.jpeg?action=crop&width=950",
    stockX:"https://stockx.com/nike-dunk-low-retro-white-black-2021",
    ebay:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=Nike+Dunk+Low+Retro+White+Black&_sacat=0",
    goat:"http://www.goat.com/sneakers/dunk-low-black-white-dd1391-100"},

    {
    shoeName:"Nike SB Dunk Low Pink Pig",
    brand:"Nike",
    colorway:"Pink/White/Black",
    retailPrice:110,
    image_url:"https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/051/521/402/original/708114_01.jpg.jpeg?action=crop&width=950",
    stockX:"https://stockx.com/nike-sb-dunk-low-pink-pig",
    ebay:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=Nike+SB+Dunk+Low+Pink+Pig&_sacat=0",
    goat:"https://www.goat.com/sneakers/dunk-low-sb-pink-pig-cv1655-600"},

    {
    shoeName:"Yeezy Foam RNR Onyx",
    brand:"adidas",
    colorway:"Onyx",
    retailPrice:80,
    image_url:"https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/069/879/091/original/907868_01.jpg.jpeg?action=crop&width=950",
    stockX:"https://stockx.com/adidas-yeezy-foam-rnnr-onyx",
    ebay:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=yeezy+foam+runner+%27onyx%27&_sacat=0&LH_TitleDesc=0&_odkw=Yeezy+Foam+Runner+%27Onyx%27&_osacat=0",
    goat:"https://www.goat.com/sneakers/yeezy-foam-runner-onyx-hp8739"},

    {
    shoeName:"Yeezy Foam RNR Desert Sand",
    brand:"adidas",
    colorway:"Desert Sand",
    retailPrice:80,
    image_url:"https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/073/719/899/original/955441_01.jpg.jpeg?action=crop&width=950",
    stockX:"https://stockx.com/adidas-yeezy-foam-rnr-desert-sand",
    ebay:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=yeezy+foam+runner+desert+sand&_sacat=0&LH_TitleDesc=0&_odkw=yeezy+foam+runner+desert+sand&_osacat=0",
    goat:"https://www.goat.com/sneakers/yeezy-foam-runner-desert-sand-gv6843"},

    {
    shoeName:"Yeezy Boost 350 V2 Bone",
    brand:"adidas",
    colorway:"Bone",
    retailPrice:230,
    image_url:"https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/069/692/833/original/896849_01.jpg.jpeg?action=crop&width=950",
    stockX:"https://stockx.com/adidas-yeezy-boost-350-v2-bone",
    ebay:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=yeezy+350+v2+bone&_sacat=0&LH_TitleDesc=0&_odkw=yeezy+350+v2+bone&_osacat=0",
    goat:"https://www.goat.com/sneakers/yeezy-boost-350-v2-pure-oat-hq6316"},

    {
    shoeName:"Yeezy Boost 350 V2 Onyx",
    brand:"adidas",
    colorway:"Onyx",
    retailPrice:230,
    image_url:"https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/216/902/original/886847_01.jpg.jpeg?action=crop&width=950",
    stockX:"https://stockx.com/adidas-yeezy-boost-350-v2-onyx",
    ebay:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=yeezy+350+v2+onyx&_sacat=0&LH_TitleDesc=0&_odkw=yeezy+350+v2+onyx&_osacat=0",
    goat:"https://www.goat.com/sneakers/yeezy-boost-350-v2-onyx-hq4540"},

    {
    shoeName:"Nike Air Max 1",
    brand:"Nike",
    colorway:"Orange/Green/Blue",
    retailPrice:160,
    image_url:"https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/073/720/021/original/939979_01.jpg.jpeg?action=crop&width=950",
    stockX:"https://stockx.com/nike-air-max-1-kasina-won-ang-orange",
    ebay:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=kasina+x+air+max+1+sp+%27won-ang+-+orange%27&_sacat=0&LH_TitleDesc=0&_odkw=Kasina+x+Air+Max+1+SP+%27Won-Ang+-+Orange%27&_osacat=0",
    goat:"https://www.goat.com/sneakers/kasina-x-air-max-1-sp-better-together-do7414-kas"},

    {
        shoeName:"Nike Air Max 1",
        brand:"Nike",
        colorway:"Grey/Blue/Off White",
        retailPrice:160,
        image_url:"https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/073/719/985/original/946192_01.jpg.jpeg?action=crop&width=950",
        stockX:"https://stockx.com/nike-air-max-1-kasina-won-ang-grey",
        ebay:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=kasina+x+air+max+1+sp+%27won-ang+-+grey%27&_sacat=0&LH_TitleDesc=0&_odkw=Kasina+x+Air+Max+1+SP+%27Won-Ang+-+Grey%27&_osacat=0",
        goat:"https://www.goat.com/sneakers/kasina-x-air-max-1-sp-better-together-grey-dq8475-001"},

    {
    shoeName:"Jordan 6 Retro",
    brand:"Air Jordan",
    colorway:"White/Red/Black",
    retailPrice:200,
    image_url:"https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/073/135/630/original/931694_01.jpg.jpeg?action=crop&width=950",
    stockX:"https://stockx.com/air-jordan-6-retro-red-oreo",
    ebay:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=air+jordan+6+retro+%27red+oreo%27&_sacat=0&LH_TitleDesc=0&_odkw=Air+Jordan+6+Retro+%27Red+Oreo%27&_osacat=0",
    goat:"https://www.goat.com/sneakers/air-jordan-6-retro-red-oreo-ct8529-162"},

    {
    shoeName:"Jordan 4 Retro",
    brand:"Air Jordan",
    colorway:"White/Black/Grey",
    retailPrice:210,
    image_url:"https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/333/264/original/895934_01.jpg.jpeg?action=crop&width=950",
    stockX:"https://stockx.com/air-jordan-4-retro-military-black",
    ebay:"https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=Air+Jordan+4+Retro+%27Military+Black%27&_sacat=0",
    goat:"https://www.goat.com/sneakers/air-jordan-4-retro-military-black-dh6927-111"
    }])