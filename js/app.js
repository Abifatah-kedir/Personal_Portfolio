

  /* ================================
  JS Paradox animation. 
  ==================================*/

  $(document).ready( function() {
    $('.bg-image').particleground({
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
      // dotColor: '#5cbdaa',
      // lineColor: '#3d4232'
    });

  }); 

  /*
    Sticks the navigation to the top of the page, when get scroolled.
  */

  const header = document.getElementById("myNavigationBar");
  const pageName = document.querySelectorAll(".pageName");
  const profileAnimate = document.querySelectorAll(".animate");
  const sticky = header.offsetTop;

  const scrollPage = ()=> {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      
      for (let i = 0;i <= profileAnimate.length; i++ ) {
        pageName[i].classList.add("sectionTittle");
        profileAnimate[i].classList.add("pageProject")

      }
    } else {
      header.classList.remove("sticky");
      for (let i = 0;i <= profileAnimate.length; i++ ) {
        profileAnimate[i].classList.remove("sectionTittle");
      
      }
    }
  }
  window.onscroll = ()=> {scrollPage()};


  /* navigation   menue */

  const mainHeader = document.querySelector(".main-header");
  const mobileHeader = document.querySelector(".mobile_Header");
  const mobileMenuIcon = document.querySelector(".TheBars");
  const smallScreenNav = document.querySelector(".smallScreenNav");


  const aboutPage = document.querySelector(".col1");
  const portfolioPage = document.querySelector(".col2");
  const ContactPage = document.querySelector(".col3");

  const linkHomePage = document.querySelector(".linkHomePage");
  const linkPortfolioPage = document.querySelector(".linkPortfolioPage");
  const linkAboutPage = document.querySelector(".linkAboutPage");
  const linkContactPage = document.querySelector(".linkContactPage");

  const flexNavHeader = ()=> {
    mainHeader.style.height = "7%";
    smallScreenNav.classList.remove("show_Content");
    mobileMenuIcon.classList.remove("change");
  }

  const smallScreenNavigation = ()=> {
    mobileMenuIcon.classList.remove("Hide_content");
    mobileMenuIcon.addEventListener('click', () => {
      const NavInclues = smallScreenNav.classList.contains("Hide_content");

      if ( NavInclues) {
        mobileMenuIcon.classList.add("change");
        smallScreenNav.classList.remove("Hide_content");
        mainHeader.style.height = "100%";
      } else {
        flexNavHeader();
      }
    });
  }

  window.addEventListener("click", (event)=> {
    let targetLink = event.target.className;

    if ( targetLink == "TheBars") {
      mobileMenuIcon.classList.add("change");
      smallScreenNav.classList.add("show_Content");
      mainHeader.style.height = "100%";
    
    } else if ( targetLink.includes("linkPortfolioPage")) {

      flexNavHeader();

      portfolioPage.classList.remove("Hide_content");
      aboutPage.classList.add("Hide_content");
      ContactPage.classList.add("Hide_content");

    } else if (targetLink.includes("linkAboutPage")) {
      flexNavHeader();
      aboutPage.classList.remove("Hide_content");
      portfolioPage.classList.add("Hide_content");
      ContactPage.classList.add("Hide_content");
      
    } else if (targetLink.includes("linkContactPage")) {
      flexNavHeader();
      ContactPage.classList.remove("Hide_content");
      aboutPage.classList.add("Hide_content");
      portfolioPage.classList.add("Hide_content");
    
    } else if (targetLink.includes("linkHomePage")) {
      flexNavHeader();
      aboutPage.classList.remove("Hide_content");
      portfolioPage.classList.remove("Hide_content");
      ContactPage.classList.remove("Hide_content");
    
    }  else {
      flexNavHeader();
    }

  });


  /*================ Main Container ==========================*/


  // const portfolioProjects = document.querySelectorAll(".port");
  const viewButton = document.querySelectorAll(".viewButton");

  for (let i = 0; i< viewButton.length; i ++ ) {
    viewButton[i].classList.add("Hide_content");
  }

  // projects butons 
  const projectButtons = ()=> {
      for(let i = 0; i < viewButton.length; i++ ) {
        const portP = document.querySelectorAll(".portP");
        portP[i].addEventListener('mouseover', ()=> {
          viewButton[i].classList.remove("Hide_content");
        });

        portP[i].addEventListener('mouseout', ()=> {
          viewButton[i].classList.add("Hide_content");
        });

      }
  }   
  projectButtons();


  /*=== Box Modal  ======*/

  // const dots = document.querySelector(".TheDots");
  // const dotChildren = dots.children;

  let indexCounter = 0;
  const ProjHeaderDiv = document.querySelector(".popUp_header");//modal header.
  const project_header = document.createElement("h3");

  const paragraphDiv = document.querySelector(".modalP"); // modal body.
  const paragraph = document.createElement('p');

  const technologyDiv = document.querySelector(".Technologies"); // modal technologies.
  const technology = document.createElement("p");

  const ProjectLink = document.createElement("a");
  ProjectLink.target = `_blank`;
  ProjectLink.className = `button`;
  ProjectLink.innerHTML =  "View Project";


  const modalWindow = document.querySelector(".modal_window");
  const portfolio = document.querySelector(".portfolio");
  
  const ModalContent = document.querySelector(".modal-content");




  const Projects = {

    Game_Note: `A browser version of Word Guessing game that Challenges a random hidden phrase with player 
                  guesses by choosing lettters from provided browser keyboard to make the game interactive and searchable, 
                  I used Javascript, html and css. `,

    API_Note: ` Built employee directory that has capability to communicate with third-party API (Application Programming Interface).
                  implimented an API that grabs random employee data and display it on web page, 
                  this API dynamically gets new data whenever the page get refreshed. Basically,learned how to talk to another Server using JavaScript.`,

    Gallary_Note: `A searchable , Interactive image gallery that lets you to search a photo from list of photos using keywords.  
                    Used HTML, CSS and the popular programming language JavaScript to create an interactive, searchable gallery of photos.`,

    Web_Style_Note: `Sass is an important tool in a modern Front End Web Developer’s toolbox.
                      It's used by many developers to make styling web pages with CSS easier and faster.I created a style guide that can act as my own personal 
                      and custom Bootstrap that I can drop into any of my projects to speed up styling, layout, and development in general.`,

    Reg_Form_Note: `Web forms appear everywhere online: forms allow users to order books, sign up for websites, and post to Facebook.
                      I built responsive, mobile-first registration form using a variety of HTML form elements.`,
    
    WebApp_Note: `Built an interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming.
                    The project involves creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability.`,
                      
    Skills: [`TOOLS   : ` ,`   HTML `, ` , CSS `, `, JAVASCRIPT`],
    titles : [`Game Show App`, `API Employee Directory`,`Interactive Photo Gallery`,`Web Style Guide`,`Online Registration Form`, `WebApp Dashboard`]
  
  }




  const Tools = Projects.Skills.map( (skill) => skill).join(' ');

  // handles clicker event and trickers  to pop up.

  portfolio.addEventListener("click", (event) => {

    let target = event.target;
    let TargetName = target.className;
    let targetParent = target.parentNode.parentNode;
 
    if(TargetName === "button") {
      modalWindow.style.display = "block";
      // dots.style.display = "block";
      
      if( targetParent.classList.contains("Game") )
      {
        indexCounter = 0;
     

        let gameNote = Projects.Game_Note;
        HTMLGenerator(Projects.titles[indexCounter],
                          gameNote,Tools);
     

      } else if ( targetParent.classList.contains("API") ) {
        indexCounter = 1;
        let APINote = Projects.API_Note;
        HTMLGenerator(Projects.titles[indexCounter],
                            APINote,Tools);
    
      } else if ( targetParent.classList.contains("Gallery") ) {
        indexCounter = 2;
        let GallaryNote = Projects.Gallary_Note;
        HTMLGenerator(Projects.titles[indexCounter], 
                                GallaryNote,Tools);
    
      } else if (targetParent.classList.contains("WSGuide")) {
        indexCounter = 3;
        let  WebStyleNote = Projects.Web_Style_Note;
        HTMLGenerator(Projects.titles[indexCounter],
                          WebStyleNote,Tools);
    
      } else if ( targetParent.classList.contains("Rform") ) {
        indexCounter = 4;
        let  RegistrationFormNote = Projects.Reg_Form_Note;
        HTMLGenerator(Projects.titles[indexCounter], 
                      RegistrationFormNote,Tools);
  
      } else if ( targetParent.classList.contains("webApp") ) {
        indexCounter = 5;
        let  WebApNote = Projects.WebApp_Note;
        HTMLGenerator(Projects.titles[indexCounter], 
                          WebApNote,Tools );

      }
    }
  });


  // generates html contents.
  const HTMLGenerator = (title, note, skill) => {

                        project_header.innerHTML = title;
                        ProjHeaderDiv.appendChild(project_header);
                        
                        // appends the paragrahph into div
                        paragraph.textContent = note;
                        paragraphDiv.appendChild(paragraph); 
                        
                        
                        technology.textContent = skill;
                        technology.className += "projectNote";
                        technologyDiv.appendChild(technology); 

                        ProjectLink.href = `${title}/home.html`;
                        technologyDiv.appendChild(ProjectLink);
                        
                    }


  ModalContent.addEventListener("click", (event)=> {

          const ProjectArray = [];
                                    
          for( var i = 0 in Projects) {
            ProjectArray.push(Projects[i]);
          }

          const numberOfProjects = ProjectArray.length - 3;
          const numberProjectHeaders = Projects.titles;

          if(event.target.className == "close") {
            modalWindow.style.display = "none";
          } else if (event.target.className == "next" && indexCounter < numberOfProjects ) {
            indexCounter += 1;
            HTMLGenerator (numberProjectHeaders[indexCounter],
                          ProjectArray[indexCounter],
                          Tools);
          } else if ( event.target.className == "prev" && indexCounter > 0  ) {
                  indexCounter -= 1;
                  HTMLGenerator (numberProjectHeaders[indexCounter],
                                ProjectArray[indexCounter],
                                Tools);
          }
  });




