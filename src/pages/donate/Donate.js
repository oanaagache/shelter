import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import "./Donate.css";

const Donate = () => {
  return (
    <>
      <div className="donate-cont">
        <div className="donate-inner">
          <img
            style={({ height: "10px" }, { width: "10px" })}
            src={logo}
            alt="Not found"
          />
          <Link className="donate-arrow" to="/">
            Back{" "}
          </Link>
        </div>

        <div className="donate-title">More Details About Shelters</div>

        <div className="donate">
          <div className="donate-subtitle">What Is An Animal Shelter?</div>

          <div className="donate-subtitle1">
            An animal shelter is a staffed facility where homeless animals—and
            animals seized by authorities in cruelty cases—find safety and
            comfort, are cared for, and are made available for donateion.
            Temporarily housing animals in shelters keeps them from being loose
            on the streets, where they struggle to find clean food and water,
            can be hit by cars, can be attacked by other animals
            donate-drop-titleor cruel humans, or face other potential dangers.
          </div>
          <br />
          <div className="donate-subtitle">What Do Animal Shelters Do? </div>

          <div className="donate-subtitle1">
            Approximately 7.6 million companion pets are surrendered to a
            shelter every year; 4.2 million are dogs and 1.4 million dogs are
            euthanized. Animals have no voice of their own, no social safety net
            and very few rights under the law. They are vulnerable and,
            unfortunately, mistreated more often than most of us would like to
            think.
          </div>
          <br />
          <div className="donate-subtitle">Why You Should Donate?</div>

          <div className="donate-subtitle1">
            Shelters and rescue operations for pets need donations from the
            community to operate. Many animal shelters do not have the resources
            they need to care for sick or injured animals. Approximately 80
            percent of animals that are euthanized are healthy or treatable and
            could have been adopted into new homes. Senior dogs and bully breeds
            are also high on the list of dogs that are at-risk for euthanasia.
          </div>
          <br />
          <div className="donate-subtitle">How You Can Help:</div>
          <ol>
            <li>Make a donation</li>
            <br />
            <div>
              Financial donations make a HUGE difference for animal charities.
              Donating money is fast, easy and allows facilities to use the
              money where it is needed most. If the nonprofit group you’re
              donating to is recognized by the IRS as a 501(c)(3) organization,
              you can deduct the value of your contribution from any taxes you
              owe.
            </div>
            <br />
            <div>
              Animal shelters need food, bedding and other supplies. Many need
              veterinarian care, medical assistance and spaying/neutering. Your
              donations will help provide the care abandoned animals need until
              a suitable home is found for them.
            </div>
            <br />
            <div>
              However, if you can’t donate money, don’t despair – there are
              other ways you can help!
            </div>
            <br />
            <li>Volunteer your time </li>
            <br />
            <div>
              Volunteering your time at a local shelter or a rescue group is one
              of the most valuable ways to help. Most animal shelters depend on
              volunteers to provide the needed care required for the animals.
              Our shelter have many of the following:
            </div>
            <ul>
              <li>
                A compassionate trained staff (plus volunteers) to care for
                animals
              </li>
              <li>
                A compassionate trained staff (plus volunteers) to care for
                animals
              </li>
              A pre-adoption home check and follow-up program
              <li>
                A humane method of euthanasia, usually an intravenous injection
                of sodium pentobarbital, administered by well-trained, gentle
                staff members
              </li>
              <li>
                A policy against giving or selling animals to laboratories or to
                be used as guard dogs
              </li>
              <li>Cruelty investigators</li>
              <li>A veterinarian on call 24 hours a day</li>
              <li>Indoor/outdoor dog runs</li>
              <li>
                A large, sunny cat room with raised perches for sitting and
                individual cages for cats who must be confined
              </li>
              <li>A quiet room for adopters to meet and get to know animals</li>
              <li>
                An active public education program to teach children and adults
                to care for animals properly
              </li>
              <li>
                A spay/neuter program that ensures all animals are sterilized at
                the time of adoption or that guarantees all adopted animals will
                be sterilized later
              </li>
              <li>
                A policy of holding lost and stray animals for a minimum of five
                days, including at least one Saturday
              </li>
            </ul>
            <br />
            <li>Donate supplies</li>
            <br />
            <div>
              Donations don’t have to be monetary. Check with your local shelter
              to find out what types of supplies they need. Common requests for
              donations include:
            </div>
            <ul>
              <li>Toys</li>
              <li>Bedding</li>
              <li>Crates</li>
              <li>Heating pads</li>
              <li>Food</li>
              <li>Cleaning supplies</li>
            </ul>
            <br />
            <li>Adopt from a shelter</li>
            <br />
            <div>
              If you’ve been considering adopting a new dog, think twice before
              buying one from a pet store. Your local shelter or rescue
              operation may have the perfect dog for you! Look for
              breed-specific rescue programs if you have your heart set on a
              certain breed.
            </div>
            <br />
            <div>
              Adopting a dog from a shelter may save his or her life, and will
              make room for another animal in need. Share your experience with
              your family and friends, and hopefully they will consider adopting
              a shelter pet the next time they are ready for a new four-legged
              family member.
            </div>
            <br />
            <Link to="/adopt" style={{ textDecoration: "none" }}>
              Click here to adopt a pet
            </Link>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Donate;
