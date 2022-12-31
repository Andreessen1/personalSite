import React from 'react';
import './WorkHistory.css';
import Collapsible from 'react-collapsible';

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }
const WorkHistory = () => {
    return (

        <div>
        
        <Collapsible trigger="Tech History" className="collapsible">
          
               <h1>
                   Personal Website: Dec 2022
               </h1>
               <ul>
                   <li>Create a website that used react and html css on the front end</li>
                   <li>Implemented numorus JS functions and useState to create the gaming protion of the site</li>
                   <li>Used Git and node</li>
               </ul>
              
               <h1>
                   Capstone Project: Dec 2022
               </h1>
               <ul>
                   <li>Worked with four Memebers of a team to create a working site</li>
                   <li>On the front end I helped with creating the react app and with the functions being imported from the Api</li>
                   <li>On the backend I helped create the Db and the Api</li>
                   <li>Helped with the funcionality of bootstrap to add it to the react app</li>
               </ul>
            
               </Collapsible>
           <Collapsible trigger="Professional History" className="collapsible">
                    <h2>McGraw Hill | 2020-Present | Remote</h2>
                    <h4>Sales Support Representative</h4>
                    <ul>
                        <li>Ranked #2 in case work load while also helping with untracked AR workload</li>
                        <li>Manages and works cases using Salesforce</li>
                        <li>Processes orders in Interlink and updated POs in Netsuite and sends requested invoices to customers</li>
                        <li>Account administration and processes order updates</li>
                        <li>Assists in AR follow ups for past due invoices
                       </li>
                    </ul>

                    <h2>Carolina Handling | 2019–2021| Charlotte, NC/ FT Remote</h2>
                    <h4>Rental Coordinator</h4>
                    <ul>
                        <li>Ranked as #1 Rental Coordinator in revenue</li>
                        <li>Helped create an inventory system that increased accuracy to 99.5%</li>
                        <li>Managed efficient coordination of rental equipment delivery and pickup using logistics routing system</li>
                        <li>Took part as a member of the company's Continuous Improvement committee</li>
                    </ul>

                    <h2>Chief Supply | 2017–2018 | Charlotte, NC</h2>
                    <h4>Customer Service Representative</h4>
                    <ul>
                        <li>Maintained an in-depth understanding of all product details and nuances to provide factual information, exceed customer expectations and increase overall sales.</li>
                        <li>Collaborated across departments to maintain relationships, increasing overall communication, employee engagement and customer satisfaction.</li>
                        <li>Spearheaded formation of a team to build a better relationship between marketing and customer service department after taking into account how changes such as better communication of promotions and other goals could increase business.</li>
                        <li>Quickly and effectively resolved customer complaints and conflicts</li>
                    </ul>
                    </Collapsible>
            <Collapsible trigger="School History" className="collapsible">
                    <h2>Full Stack Academy |  December2022| Remote</h2>
                    <h4>Web Design Certificate</h4>
                    <ul>
                        
                    </ul>

                    <h2>Community College of Philadelphia | 2017</h2>
                    <h4>Assocaites in Business Administration</h4>
                    </Collapsible>
                    </div>
    )
}

export default WorkHistory;