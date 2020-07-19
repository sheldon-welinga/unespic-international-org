import cause1 from "../images/cause-1.jpg";
import cause2 from "../images/cause-2.jpg";
import cause3 from "../images/cause-3.jpeg";
import cause4 from "../images/cause-4.jpeg";
import cause5 from "../images/cause-5.jpg";
import cause6 from "../images/cause-6.jpg";
import mission from "../images/mission.jpg";
import volunteer from "../images/volunteer.jpg";
import faqs from "../images/faqs.jpg";
import food from "../images/food-and-nutrition.jpg";
import water from "../images/Clean-Water.jpg";
import women from "../images/women-and-girls-empowerment.jpg";
import health from "../images/health.jpg";
import emergency from "../images/emergency-and-humanitarian.jpg";
import extra1 from "../images/schools.jpg";
import extra2 from '../images/food1.jpg';
import extra3 from "../images/nutrition.jpg";
import floods from "../images/floods.jpg";
// gallery images
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";
import gallery7 from "../images/gallery7.jpg";
import gallery8 from "../images/gallery8.jpeg";
import gallery9 from "../images/gallery9.jpg";
import gallery10 from "../images/gallery10.jpeg";
import gallery11 from "../images/gallery11.jpg";
import gallery12 from "../images/gallery12.jpg";
import gallery13 from "../images/gallery13.jpg";
import gallery14 from "../images/gallery14.png";

//videos
import video1 from "../videos/video1.mp4";
import video1_w from "../videos/video1-w.webm";
import video2 from "../videos/video2.mp4";
import video2_w from "../videos/video2-w.webm";
import video3 from "../videos/video3.mp4";
import video3_w from "../videos/video3-w.webm";

//video posters
import poster1 from "../images/video1-poster.JPG";
import poster2 from "../images/video2-poster.JPG";
import poster3 from "../images/video3-poster.JPG";

//partners
import partner1 from "../images/partner1.png";
import partner2 from "../images/partner2.jpg";

//news
import news1 from "../images/news1.jpeg";
import news2 from "../images/news2.jpeg";
import news3 from "../images/news3.jpeg";

export default {
    "footer":[
            {
                "heading": "About Us",
                "lists": ["We provide food, clothing, shelter and care for the poor families, orphans and widows and to bring hope for their future. We uplift and educate the poor and to train them in an occupation which would give them a measure of independence and self-esteem."]
            },
            {
                "heading": "Our Impact",
                "lists": ["Our Donors", "What We Do", "FAQ's"]
            },
            {
                "heading": "Helpful Links",
                "lists": ["Unespic International Foundation Stories"]
            }
    ],
    "about":[
        {
            "title":"About Us",
            "single_about": "about-us",
            "description": ['Unespic members are all dedicated to solving the complex, inter-related challenges facing Africa. Our members realize that, as effective as they each are on their own, they can be even more powerful when they approach Africa’s issues as a group.',
            'Whether they are collecting and distributing books to school children, introducing medical strategies to combat the spread of HIV/AIDS, or identifying and supporting women’s micro-enterprise projects, our members have one thing in common—a passionate desire to help the people of Africa solve critical problems and build a better future for their children and communities. Together our members, with their partners on the ground in Africa, touch almost every aspect of the African community.'],
            "image": ''
        },
        {
            "title": "Our Mission",
            "single_about": "mission-and-vision",
            "description": ["To be the champion of uplifting the downtrodden, vulnerable, disadvantaged & deprived people in the society and to bring them back to mainstream by breaking all barriers towards improvement of their quality life"],
            "image": mission
        },
        {
            "title": "Become a UNESPIC Volunteer",
            "single_about": "become-a-volunteer",
            "description": [],
            "image": volunteer
        },
        {
            "title": "Frequently Asked Questions",
            "single_about": "faqs",
            "description": [],
            "image": faqs
        }
    ],
    "our_causes": [
        {
            "id":1,
            "title": "Rescuing a School Girl",
            "single_cause": "rescuing-a-school-girl",
            "excerpt": "The above girl in the picture is a form two school Girl. She has been rescued from an early forced Marriage....",
            "description": ['The above girl in the picture is a form two school Girl. She has been rescued from an early forced Marriage. She is currently staying with a pastor(2nd from Right). This has been occasioned by the poverty of the parents who married her off to get dowry in form of Cattle.',
            'For this reason,we are requesting well wishers to help raise funds to help the Girl continue with her Education,cater for her accommodation away from their home until she completes her Education and help start for their parents some small business so that they can sustain themselves.'],
            "extras": ["Adaptation to Climate Change", "Agricultural Value Chains"],
            'images': [cause1, cause1]
        },
        {
            "id":2,
            "title": "Schools & Education",
            "single_cause": "schools-and-education",
            "excerpt": "Without EDUCATION rural people cannot break the cycle of poverty and pursue a healthy way of living...",
            "description": ['Without EDUCATION rural people cannot break the cycle of poverty. In remote communities, schools are often overlooked and chronically lacking in resources. Since its founding, UNESPIC Foundation has made the building and improvement of preschools, primary schools and high schools a priority. In addition, it develops and funds scholarship programs, conducts vocational training, facilitates adult education and supports orphaned and vulnerable children'],
            'extras': [],
            "images": [cause2, cause2]
        },
        {
            "id":3,
            "title": "Income Generating Activities",
            "single_cause": "income-generating-activities",
            "excerpt":"Unemployment in rural communities can be tackled by identifying and empowering entrepreneurs...",
            "description": ['Unemployment in rural communities can be tackled by identifying and empowering entrepreneurs, whose small, emerging enterprises can be an effective means of job creation.','UNESPIC Foundation identifies opportunities and helps start-ups. In particular, UNESPIC Foundation stimulates the potential for income generation through a highly successful skills training program and access to technology.'],
            "extras": ['Safe Water System and Hygiene', 'Kenya Resilient Arid Lands Partnership for Integrated Development (K-RAPID)'],
            "images": [cause3, cause3]
        },
        {
            "id":4,
            "title": "Farming & The Environment",
            "single_cause":"farming-and-the-environment",
            "excerpt": "Provide rural communities with the capacity for informed decision making about land management...",
            "description": ['The ENVIRONMENT program aims to provide rural communities with the capacity for informed decision making about land management and conservation and also focuses on the conservation of wildlife.','Students learn about the neighboring game preserves through conservation lessons and visits to the preserves. The program also includes community training on subjects such as the effective use of water resources.'],
            "extras": [],
            "images":[cause4]
        },
        {
            "id":5,
            "title": "Clean Water",
            "single_cause":"clean-water",
            "excerpt": "One of the worst daily hardships faced by many African rural communities is the extreme shortage of water...",
            "description": ['One of the worst daily hardships faced by many African rural communities is the extreme shortage of water. Rural women and children often walk more than a kilometer every day to fetch water, returning home stooped under the backbreaking burden of their full water buckets, sometimes repeating this trip several times per day.',
            'When children are required to spend a large part of their day gathering water, the task affects all aspects of their youth, especially time spent on education and physical development.'],
            "extras": [],
            "images":[cause5]
        },
        {
            "id":6,
            "title": "Health Care",
            "single_cause": "health-care",
            "excerpt": 'Many communities in rural Africa still do not have access to medical facilities and primary healthcare...',
            "description": ['Despite vast advances made in medicine over the past decades, many communities in rural Africa still do not have access to medical facilities and primary healthcare. Various factors such as poverty, malnutrition and unemployment all contribute to ill health. UNESPIC Foundation assists by facilitating the building of clinics and accommodations for staff and the upgrading of existing, but inadequate, primary healthcare clinics.',
            'In most of the communities UNESPIC Foundation supports, there are government clinics which attempt to provide for the local people, but they are woefully under-equipped, lacking in resources and poorly maintained. UNESPIC Foundation is committed to ensuring that better facilities are put in place.'],
            "extras": ['Safe Water System and Hygiene','Project (SWS)'],
            "images": [cause6]
        }
        
    ],
    "faqs": [
        {
            "title":"Passion",
            "description": "We believe passionately in our mission and the ability of people living in extreme poverty to improve their lives."
        },
        {
            "title": "Commitment",
            "description": "We are committed to assessing and evaluating our programs to ensure that they reduce poverty and create sustainable businesses."
        },
        {
            "title": "Opennness",
            "description": "We respect the ideas and opinions of others and insist upon transparency in both our internal and external communication."
        },
        {
            "title": "Innovation",
            "description": "We value innovation as a means to reduce poverty and treat new ideas, new technologies and new partners as opportunities to grow our impact."
        },
        {
            "title": "Sustainability",
            "description": "We are committed to ensuring that our businesses and our organization are sustainable in the long-term."
        }
    ],
    "what_we_do": [
        {
            "id":1,
            "title": "Food and Nutrition Security",
            "single_what_we_do":"food-and-nutrition-security",
            "description": ['This program exists to empower vulnerable rural communities to enhance their livelihoods through multiple approaches including food security and economic development, integrated water, sanitation and hygiene (WASH), disaster risk reduction, community-based climate change adaptation (CBA) and value chain/ making the markets work for the poor.',
            'This program implements interventions that address diverse livelihood needs of different segments of the target populations. The needs range from inadequate water, hygiene and sanitation services, food insecurity and low income.',
            'In rural, remote and semi-arid regions where living conditions are deplorable and unfavorable, Unespic International has strived to address the underlying causes of poverty by actively involving the local communities and stakeholders to finding sustainable solutions to their own problems and needs. Relevant interventions are being rolled out to mitigate effects of drought, hunger, climate change and environmental degradation as well as enhancing disaster risk reduction.',
            'The program hosts a diverse range of projects spread in different sub-counties in Kenya. There are a cluster of projects and programmes that focuses on livelihood improvement specifically contributing to:'],
            "image": food,
            "extras": []
        },
        {
            "id":2,
            "title": "Water, Sanitation and Hygiene (WASH)",
            "single_what_we_do":"water-sanitation-and-hygiene",
            "description": ['Unespic International has contributed enormously to the country’s efforts of improving access to safe water which now stands at 51% nationally, modest sanitation and good hygiene practices.',
           'Over the years Unespic’s WASH programming approach has evolved from just humanitarian intervention to a  major driver and catalyst of improving households’ incomes through food production, livestock keeping and environmental hygiene. In order to increase on coverage, diversified approaches have been used including working directly with communities, institutional based WASH activities targeting public schools and health facilities, as well as through partnerships with other actors.'],
            "image": water,
            "extras": []
        },
        {
            "id":3,
            "title": "Women and Girls Economic Empowerment",
            "single_what_we_do":"women-and-girls-economic-empowerment",
            "description": ['Unespic’s Women and Girls Economic Empowerment program provides opportunities for positive change by providing a pathway for women and girls to access and take control of productive assets. It does this by providing a channel for women and girls to become financially included, build assets that enables them build a sustainable livelihood.',
            'The Program is aligned to Sustainable Development Goals (SDGs) 1 which focuses on ending poverty in all its manifestations, SDG 5 which focus on the reduction of gender inequalities and SDG 8 which focuses on sustainable economic growth. Unespic has developed a Women Empowerment Strategy to complement its efforts in reaching out to women and girls.',
            'We work towards building positive changes to Women and Girls through financial inclusion and economic empowerment initiatives that address needs of chronic livelihood insecure women and girls constrained by lack of access to and control over productive assets, basic services and denial of rights living in urban informal and rural settings.'],
            "image":women,
            "extras": [extra1, extra2]
        },
        {
            "id":4,
            "title": "Health",
            "single_what_we_do":"health",
            "description": ['Unespic International continues to work with the National and County Government of Kenya and other actors to improve maternal and child health as well as sexual and reproductive health. We are strengthening the health systems to Manage and deliver quality maternal, newborn and child health services; Increase demand for and uptake for maternal, newborn and child health services and ensure mothers and newborns seek and access the appropriate care timely, and Strengthen innovation and learning on maternal, newborn and child health, as well as governance.',
            'Unespic is committed on improving Maternal, Infant and young child feeding, including nutrition of women of reproductive age. Unespic does this by increasing the capacity and commitment of CSOs and state health actors to provide and facilitate access to coordinated, complementary, quality maternal, infant and young child nutrition services, with a critical focus at county level. Unespic also focuses on improving Family Planning and is introducing programming on Non communicable diseases, as these take toll on Kenyan populations.'],
            "image": health,
            "extras": [extra3]
        },
        {
            "id":5,
            "title": "Emergency and Humanitarian Assistance",
            "single_what_we_do":"emergency-and-humanitarian-assistance",
            "description": ['Humanitarian response is central to Unespic’s mission to reduce poverty, recognizing disasters as both cause and effect of poverty and injustice with humanitarian efforts an intrinsic part of our overall program approaches. We strategically respond to emergencies in four sectors of Water, Sanitation and Hygiene (WASH), Livelihoods, Sexual and Reproductive Health (SRH) and Refugee Assistance.'],
            "image": emergency,
            "extras": [gallery14, floods, cause2]
        }
    ],
    "gallery": [
        {"id": 1,"image": gallery1},
        {"id": 2,"image": gallery2},
        {"id": 3,"image": gallery3},
        {"id": 4,"image": gallery4},
        {"id": 5,"image": gallery5},
        {"id": 6,"image": gallery6},
        {"id": 7,"image": gallery7},
        {"id": 8,"image": gallery8},
        {"id": 9,"image": gallery9},
        {"id": 10,"image": gallery10},
        {"id": 11,"image": gallery11},
        {"id": 12,"image": gallery12},
        {"id": 13,"image": gallery13},
        {"id": 14,"image": gallery14}
    ],
    "videos": [
        {"id": 1, "video": video1, "video_w": video1_w, "poster": poster1, "title": "Agriculture"},
        {"id": 2, "video": video2, "video_w": video2_w, "poster": poster2, "title": "Flooding"},
        {"id": 3, "video": video3, "video_w": video3_w, "poster": poster3, "title": "Disaster"}
    ],
    "partners":[
        {"id": 1, "partner": partner1},
        {"id": 2, "partner": partner2}
    ],
    "news": [
        {
            "id": 1, 
            "image": news1, 
            "title": "Rescuing a school girl from early marriage", 
            "link": "https://gogetfunding.com/rescuing-a-school-going-girl-from-early-marriage/",
            "content": "This has been occasioned by the poverty of the parents who married her off to get dowry"
        },
        {
            "id": 2, 
            "image": news2, 
            "title": 
            "A widow a better a better house", 
            "link": "https://gogetfunding.com/a-widow-a-better-house/",
            "content": "Maria is a young widow who lives in Gilgil Area ,Kenya. She became widow after"
        },
        {
            "id": 3,
            "image": news3, 
            "title": "Help street girl better life", 
            "link": "https://www.givingway.com/project/6cd76d",
            "content": "This young girl lost her Mother several years ago. The parent was"
        }
    ]

}