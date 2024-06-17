// ### დავალებები

// ### პროექტი 64 - Filtering Records - ჩანაწერების გაფილტვრა
// ჩანაწერების დახარისხება სასარგებლოა, მაგრამ ზოგჯერ საჭიროა შედეგების გაფილტვრა, 
// რათა იპოვოთ ან აჩვენოთ მხოლოდ ის, რასაც ეძებთ.

// მოცემული მონაცემებთა ნაკრების გათვალისწინებით:

// | **First Name** | **Last Name**  | **Position** | **Separation date**  |
// | --------- | --------- | ------------------- | ----------------- |
// | John  | Johnson |  Manager |  2016-12-31 |
// | Tou | Xiong | Software Engineer | 2016-10-05 |
// | Michaela | Michaelson | District Manager | 2015-12-19 |
// | Jake | Jacobson | Programmer |  |
// | Jacquelyn | Jackson | DBA |  |
// | Sally    | Weber| Web Developer | 2015-12-18 |

// შექმენით პროგრამა, რომელიც საშუალებას აძლევს მომხმარებელს, აღმოაჩინოს ის ჩანაწერები, 
// რომელიც ემთხვევა მის საძიებო სტრიქონს. უნდა მოხდეს საძიებო სტრიქონის შედარება სახელის
//  ან გვარის ველთან.

// მაგალითად:
// ```shell
// > Enter a search string: Jac
// > Results:

// | **Name** | **Position** | **Separation date**  |
// | --------- | ------------ | -------------- |
// | Jacquelyn Jackson | DBA |  |
// | Jake Jacobson | Programmer |  |

// ```

// * მონაცემები იქონიეთ ობიექტების მასივში.

// დამატებითი გამოწვევა:
// * ჰკითხეთ მომხმარებელს, როგორ დალაგდეს ჩანაწერები. დაუშვით დახარისხება თარიღის, 
// პოზიციის ან გვარის მიხედვით.
// const arrNames = [
//     {name:'sergi',lastName:'qaliashvili',position: 'frontendDev'},
//     {name:'gio',lastName:'amashukeli',position: 'footballer'},
//     {name:'nika',lastName:'shengelia',position: 'agronomy'},
//     {name:'dato',lastName:'meparishvili',position: 'singer'},
// ]
// const search = prompt('search what U want').toLowerCase()

// const results = arrNames.filter(record =>
//     record.name.toLowerCase().includes(search) || 
//     record.lastName.toLowerCase().includes(search)
// );

// if (results.length > 0) {
//     results.forEach(record => {
//         console.log(`Name: ${record.name} ${record.lastName}, Position: ${record.position}`);
//     });
// } else {
//     console.log('No records found.');
// }
// ### პროექტი 65 - Who’s in Space? - ვინ არის კოსმოსში?

    // იცოდით, რომ ზუსტად შეგიძლიათ გაიგოთ, ვინ არის ახლა კოსმოსში? ამის შესახებ
    // ინფორმაციას Open Notify API გვაწვდის. ეწვიეთ ბმულს:
    // http://api.open-notify.org/astros.json, რომ ნახოთ არა მხოლოდ რამდენი 
    //ადამიანი იმყოფება ამჟამად კოსმოსში, არამედ - მათი სახელები და ის, თუ რომელ კოსმოსურ ხომალდზე იმყოფებიან.

// შექმენით პროგრამა, რომელიც ამოიღებს ამ მონაცემებს და აჩვენებს ინფორმაციას ამ API-დან ცხრილის ფორმატში.

// მაგალითად:
// ```shell
// | **Name** | **Craft** | 
// | --------- | ------------ | 
// | Gennady Padalka | ISS |
// | Mikhail Kornienko | ISS |
// | Scott Kelly |  ISS |  

// ```

// ### პროექტი 66 - Grabbing the Weather - ამინდის გაგება

// დღეს კარგი ამინდი იქნება? თუ ქურთუკი უნდა ვიქონიი? OpenWeatherMap API-ის გამოყენებით,
// ბმულით: http://openweathermap.org/ , შექმენით პროგრამა, რომელიც მოგთხოვთ ქალაქის სახელს და
// დააბრუნებს ქალაქის მიმდინარე ტემპერატურას.

// მაგალითად:
// ```shell
// > Where are you? Chicago IL
// > Chicago weather:
// > 65 degrees Fahrenheit
// const city = prompt('Enter the city name');

// async function temperature() {
//     const apiKey = 'c1951e90407ebbc8a63d7fd603621203';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('City not found');
//         }

//         const data = await response.json();
//         const temperature = data.main.temp;

//         console.log(`The current temperature in ${city} is ${temperature}°C.`);
//     } catch (error) {
//         console.error('Error fetching weather data:', error.message);
//     }
// }

// temperature();


// ### პროექტი 68 - Flickr Photo Search - ფოტოს ძებნა Flickr-ზე

// ზოგიერთი სერვისი ძიების ფუნქციებს უზრუნველჰყოფს და გაძლევთ კონტროლი საშუალებას 
//თქვენ მიერ მიღებულ შედეგებზე. თქვენ მხოლოდ სწორი მოთხოვნის (request) ჩამოყალიბება გჭირდებათ.
// შექმენით პროგრამა გრაფიკული ინტერფეისით, რომელიც იღებს საძიებო სტრიქონს (string) და აჩვენებს ფოტოებს, 
//რომლებიც შეესაბამება ამ ძიებას. სერვისად გამოიყენეთ Flickr-ის საჯარო ფოტოების ბმული:
// https://www.flickr.com/services/feeds/docs/photos_public/ 

// ### პროექტი 69 - Movie Recommendations - ფილმის რეკომენდაციები

// დაწერეთ პროგრამა, რომელიც აჩვენებს ინფორმაციას მოცემული ფილმის შესახებ. გამოიყენეთ 
//Rotten Tomatoes-ს API მისამართზე: http://developer.rottentomatoes.com/ და მიიღეთ API key. მოითხოვეთ
// საძიებო input და აჩვენეთ შემდეგი მონაცემები: სათაური, წელი, რეიტინგი, გამოშვების დრო და მოკლე შინაარსი,
// თუ ასეთი არსებობს. მაშინ, თუ ფილმისთვის აუდიტორიის მიერ მიცემული შეფასება 80%-ს აღემატება, 
//პროგრამა რეკომენდაციას უწევს მომხმარებელს, რომ ეს ფილმი ახლავე ნახოს. თუ ქულა 50%-ზე დაბალია,
// რეკომენდაციაა, რომ მომხმარებელმა ფილმის ყურებას თავი აარიდოს. 

// მაგალითად:
// ```shell
// > Enter the name of a movie: Guardians of the Galaxy
// > Title: Guardians of the Galaxy
// > Year: 2014
// > Rating: PG-13
// > Running Time: 121 minutes
// > Description: From Marvel...
// > You should watch this movie right now!
// ```
