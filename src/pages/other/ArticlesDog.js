import React, { useState } from "react";
import logo from "../../images/image4.svg";
import pic1 from "../../images/image6.jpg";
import pic2 from "../../images/image7.jpg";
import pic3 from "../../images/image8.jpg";
import pic4 from "../../images/image9.jpg";
import pic5 from "../../images/image14.jpg";
import pic6 from "../../images/image15.jpg";
import pic7 from "../../images/image16.jpg";
import pic8 from "../../images/image17.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Table from "react-bootstrap/Table";
Modal.setAppElement("#root");

const ArticlesDog = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);

  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img style={({ height: 1 }, { padding: 10 })} src={logo} />
            <h2>
              <Link to="/other" style={{ textDecoration: "none" }}>
                Back
              </Link>
            </h2>
          </div>

          <h4 className="adopt-title">Dog Adoption</h4>
        </div>
      </div>

      <div className="cards">
        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
              }}
              src={pic1}
            />

            <div className="card-inner">
              <div className="card-details">
                <h2>Why Are Dogs Given Up?</h2>
                <h5>
                  Find out the most common reasons for pet relinquishment. The
                  truth may surprise you!
                </h5>
                {/* <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlesdog");
                    }}
                  >
                    Read more
                  </button>
                </div> */}
                <button onClick={() => setModalOpen1(true)}>Read more</button>
                <Modal isOpen={modalOpen1}>
                  <h2>Why Are Dogs Given Up?</h2>
                  <img
                    style={{
                      width: 300,
                      height: 300,
                    }}
                    src={pic1}
                  />
                  <h6>
                    In a recent study conducted by the National Council on Pet
                    Population Study and Policy (NCPPSP) and published in the
                    July issue of the Journal of Applied Animal Welfare Science
                    (JAAWS), researchers went into 12 selected animal shelters
                    in the United States for one year to find out why. The
                    results of the study show that the top seven reasons for
                    relinquishment for both dogs and cats are the same. “These
                    commonalities suggest that there may be similar ways to
                    address relinquishment in dogs and cats,” says Pam Burney,
                    NCPPSP president. “For people who work in a shelter all day,
                    there isn’t always time to look at these issues. We have
                    impressions of what’s happening, but now we have objective
                    data that will help us develop specific programs to address
                    the issues that have been identified.”
                  </h6>
                  <h6>Top 10 Reasons for Relinquishment:</h6>
                  <h6>Dogs:</h6>
                  <ol>
                    <li>Moving (7%) </li>
                    <li>Landlord not allowing pet (6%)</li>
                    <li>Too many animals in household (4%)</li>
                    <li>Cost of pet maintenance (5%) </li>
                    <li>Owner having personal problems (4%) </li>
                    <li>
                      Inadequate facilities (4%)
                      <li>No homes available for litter mates (3%)</li>
                    </li>
                    <li>Having no time for pet (4%)</li>
                    <li>Pet illness(es) (4%) </li>
                    <li>Biting (3%)</li>
                  </ol>
                  <h6>Cats:</h6>
                  <ol>
                    <li>Moving (8%) </li>
                    <li>Landlord not allowing pet (6%)</li>
                    <li>Too many animals in household (11%)</li>
                    <li>Cost of pet maintenance (6%) </li>
                    <li>Owner having personal problems (4%) </li>
                    <li>Inadequate facilities (2%)</li>
                    <li>No homes available for litter mates (6%)</li>
                    <li>Allergies in family (8%)</li>
                    <li>House soiling (5%) </li>
                    <li>Incompatibility with other pets (2%)</li>
                  </ol>
                  <h6>
                    Specially trained researchers completed confidential
                    individual interviews with pet owners who were relinquishing
                    their dogs or cats to animal shelters. Pet owners were
                    allowed to give up to five reasons for relinquishment.
                    Interviewers did not, however, prioritize the responses.
                    They simply recorded them in the order stated.
                  </h6>
                  <h6>
                    Characteristics of Pets Being Relinquished In addition to
                    the reasons for relinquishment, the study collected data on
                    the pets being relinquished. According to the study:
                  </h6>
                  <ul>
                    <li>
                      The majority of the surrendered dogs (47.7%) and cats
                      (40.3%) were between 5 months and 3 years of age.
                    </li>
                    <li>
                      The majority of dogs (37.1%) and cats (30.2) had been
                      owned from 7 months to 1 year.
                    </li>
                    <li>
                      Approximately half of the pets (42.8% of dogs; 50.8% of
                      cats) surrendered were not neutered. Many of the pets
                      relinquished (33% of dogs; 46.9% of cats) had not been to
                      a veterinarian.
                    </li>
                    <li>
                      Approximately half of the pets (42.8% of dogs; 50.8% of
                      cats) surrendered were not neutered. Many of the pets
                      relinquished (33% of dogs; 46.9% of cats) had not been to
                      a veterinarian.
                    </li>
                    <li>
                      Approximately half of the pets (42.8% of dogs; 50.8% of
                      cats) surrendered were not neutered. Many of the pets
                      relinquished (33% of dogs; 46.9% of cats) had not been to
                      a veterinarian.
                    </li>
                    <li>
                      Close to equal numbers of male and female dogs and cats
                      were surrendered.
                    </li>
                    <li>
                      Most dogs (96%) had not received any obedience training.
                    </li>
                  </ul>
                  <h6>Characteristics of Pet Owners Surrendering Pets </h6>
                  During the confidential interviews, researchers also gathered
                  data on the people surrendering the pets. “Owners represented
                  a broad range of age, ethnicity, education, and income level,
                  indicating continued efforts will need to reach wide and far
                  into communities across the country,” say Dr. Mo Salman, the
                  article’s senior author.
                  <h6></h6>
                  The NCPPSP Regional Shelter Survey was designed, implemented,
                  and analyzed by six members of the NCPPSP Scientific Advisory
                  Committee. Regional investigators were encouraged to select
                  shelters that were likely to be representative of those in
                  their locations. The selection was also based on a shelter’s
                  ability to dedicate time and resources to the project.
                  <h6></h6>
                  The publication of this article represents the first such
                  scientific and public release of relinquishment data from the
                  NCPPSP’s ongoing research into pet population issues. “The
                  council has undertaken several important studies to better
                  understand the issue of unwanted companion animals. This
                  problem cannot be solved unless we truly understand it,” says
                  Burney. “Without this new data, individuals and organizations
                  can have a clear idea of how to approach these issues most
                  effectively.”
                  <h6></h6>
                  As with all research, there are limitations. According to the
                  authors, “the study was designed to describe the animals
                  submitted to shelters. Thus, this set of data has no
                  comparison data from the general pet-owning population. Many
                  factors undoubtedly influence relinquishment, and some
                  critical factors may have been omitted. This study represents
                  a beginning of systematic data collection to examine this
                  complex problem. The study is not designed to deal with
                  animals other than those entering shelters, and influences
                  cannot be drawn beyond this population.”
                  <h6></h6>
                  The NCPPSP is a coalition of:
                  <h6></h6>
                  <p>
                    American Animal Hospital Association American Humane
                    Association
                  </p>
                  <p>American Kennel Club </p>
                  <p>
                    American Society for the Prevention of Cruelty to Animals
                  </p>
                  <p>American Veterinary Medical</p>
                  <p>
                    Association Association of Teachers of Veterinary Public
                  </p>
                  <p>Health and Preventative Medicine</p>
                  <p>Cat Fanciers Association</p>
                  <p>The Humane Society of the United States </p>
                  <p>
                    Massachusetts Society for the Prevention of Cruelty to
                    Animals{" "}
                  </p>
                  <p>National Animal Control Association </p>
                  <p>Society of Animal Welfare Administrators </p>
                  <p>
                    * NOTE: The percentages following the dog and cat
                    information in this section were not a part of the original
                    press release and have been added. The figures come from an
                    article by Dr. M. D. Salman, Dr. John G. New, Jr., et al.,
                    in the Journal of Applied Animal Welfare Science, 1(3), 207-
                    226. The name of the article is, “Human and Animal Factors
                    Related to the Relinquishment of Dogs and Cats in 12
                    Selected Animal Shelters in the United States.” The
                    percentages do not add up to 100% because they represent
                    only the top ten reasons given by owners for relinquishment
                    of animals to shelters.{" "}
                  </p>
                  <p>
                    A copy of the press release and article can be obtained by
                    contacting:
                  </p>
                  <p>
                    Darlene Larson Public Information Director PO Box 341 New
                    London, MN 56273 Phone: 320/354-3055
                  </p>
                  <p>
                    Submitted by Karon Brandt. Karen is a One By One Animal
                    Rescue Organization volunteer. One By One is located outside
                    of Kutztown, PA, and is run by volunteers. This is a
                    non-profit, no-kill organization. One By One place dogs
                    through direct referrals, after screening, or after a
                    placement and assessment in a foster home.
                  </p>
                  <button onClick={() => setModalOpen1(false)}>Close</button>
                </Modal>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
              }}
              src={pic2}
            />

            <div className="card-inner">
              <div className="card-details">
                <h2>First 30 Days With A New Dog</h2>
                <h5>
                  The first month is the most important to bond with a new dog.
                  Learn what to expect.
                </h5>
                {/* <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlesdog");
                    }}
                  >
                    Read more
                  </button>
                </div> */}
                <button onClick={() => setModalOpen2(true)}>Read more</button>
                <Modal isOpen={modalOpen2}>
                  <h2>Dog Adoption Tips – Bringing Home a New Rescue Dog</h2>
                  <img
                    style={{
                      width: 300,
                      height: 300,
                    }}
                    src={pic2}
                  />
                  <p>
                    Bringing home a shelter dog that you adopt may be a rescued
                    stray or a dog that someone has voluntarily surrendered for
                    adoption.{" "}
                  </p>
                  <p>
                    Whether he was born in the bushes behind the laundromat or
                    an adolescent abandoned on the streets by his
                    once-upon-a-time owner, the streetwise stray can be a real
                    challenge to incorporate into your life. The famous “he
                    followed me home, can I keep him, Mom?” canine is a special
                    animal that needs time and space, patience, and
                    understanding.{" "}
                  </p>
                  <p>
                    The first few days in your home are special and critical for
                    a pet. Your new dog will be confused about where he is and
                    what to expect from you. Setting up some clear structure
                    with your family for your dog will be paramount in making as
                    smooth a transition as possible.
                  </p>
                  <p>
                    Bringing a puppy home, they need more than just a bed and a
                    food bowl to thrive. They also need constant care and
                    attention. While a puppy’s first night at home may require a
                    lot of work initially, it’s well worth the effort down the
                    road. Establishing good habits in those first weeks will lay
                    the groundwork for a lifetime of happiness for you and your
                    dog. Remember, you have a responsibility to help your puppy
                    grow into a happy and healthy dog. Here are some tips for
                    puppy care to help first-time dog owners get started:
                  </p>

                  <h6>Before You Bring Your Dog Home:</h6>
                  <ul>
                    <li>
                      Determine where your dog will be spending most of his
                      time. Because he will be under a lot of stress with the
                      change of environment (from a shelter or foster home to
                      your house), he may forget any housebreaking (if any) he’s
                      learned. Often a kitchen will work best for easy clean-up.
                    </li>
                    <li>
                      If you plan on crate training your dog, be sure to have a
                      crate set up and ready to go for when you bring your new
                      dog home. Find out more about crate training your dog.
                    </li>
                    <li>
                      If you plan on crate training your dog, be sure to have a
                      crate set up and ready to go for when you bring your new
                      dog home. Find out more about crate training your dog.
                    </li>
                    <li>
                      Training your dog will start the first moment you have
                      him. Take time to create a vocabulary list everyone will
                      use when giving your dog directions. This will help
                      prevent confusion and help your dog learn his commands
                      more quickly. Not sure which commands to use? Check out
                      <Link to="/articlesdog">How to Talk to Your Dog.</Link>
                    </li>
                    <li>
                      Bring an ID tag with your phone number on it with you when
                      you pick up your dog so that he has an extra measure of
                      safety for the ride home and the first few uneasy days. If
                      he is microchipped, be sure to register your contact
                      information with the chip’s company, if the rescue or
                      shelter did not already do so.
                    </li>
                  </ul>
                  <h6>First Day:</h6>
                  <ul>
                    <li>
                      We know moving is stressful — and your new dog feels the
                      same way! Give him time to acclimate to your home and
                      family before introducing him to strangers. Make sure
                      children know how to approach the dog without overwhelming
                      him. Go here for more on introducing dogs and children.
                    </li>
                    <li>
                      We know moving is stressful — and your new dog feels the
                      same way! Give him time to acclimate to your home and
                      family before introducing him to strangers. Make sure
                      children know how to approach the dog without overwhelming
                      him. Go here for more on introducing dogs and children.
                    </li>
                    <li>
                      On the way home, your dog should be safely secured,
                      preferably in a crate. Some dogs find car trips stressful,
                      so having him in a safe place will make the trip home
                      easier for him and you. Once home, take him to his
                      toileting area immediately and spend a good amount of time
                      with him so he will get used to the area and relieve
                      himself. Even if your dog does relieve himself during this
                      time, be prepared for accidents. Coming into a new home
                      with new people, new smells and new sounds can throw even
                      the most housebroken dog off-track, so be ready just in
                      case. Need more housetraining tips? Check out our Dog
                      Housetraining section.
                    </li>
                    <li>
                      From there, start your schedule of feeding, toileting, and
                      play/exercise. From Day One, your dog will need family
                      time and brief periods of solitary confinement. Don’t give
                      in and comfort him if he whines when left alone. Instead,
                      give him attention for good behavior, such as chewing on a
                      toy or resting quietly (Source: Preparing Your Home For A
                      New Dog).
                    </li>
                    <li>
                      From there, start your schedule of feeding, toileting, and
                      play/exercise. From Day One, your dog will need family
                      time and brief periods of solitary confinement. Don’t give
                      in and comfort him if he whines when left alone. Instead,
                      give him attention for good behavior, such as chewing on a
                      toy or resting quietly (Source: Preparing Your Home For A
                      New Dog).
                    </li>
                    <li>
                      If he came from another home, objects like leashes, hands,
                      rolled-up newspapers and magazines, feet, chairs, and
                      sticks are just some of the pieces of “training equipment”
                      that may have been used on this dog. Words like “come
                      here” and “lie down” may bring forth a reaction other than
                      the one you expect. Or maybe he led a sheltered life and
                      was never socialized to children or sidewalk activity.
                      This dog may be the product of a never-ending series of
                      scrambled communications and unreal expectations that will
                      require patience on your part.
                    </li>
                    <li>
                      If he came from another home, objects like leashes, hands,
                      rolled-up newspapers and magazines, feet, chairs, and
                      sticks are just some of the pieces of “training equipment”
                      that may have been used on this dog. Words like “come
                      here” and “lie down” may bring forth a reaction other than
                      the one you expect. Or maybe he led a sheltered life and
                      was never socialized to children or sidewalk activity.
                      This dog may be the product of a never-ending series of
                      scrambled communications and unreal expectations that will
                      require patience on your part.
                    </li>
                    <li>
                      Remove poisonous houseplants, such as amaryllis,
                      mistletoe, holly, or poinsettia, or keep them in hanging
                      baskets up high, where your puppy cannot reach them.
                    </li>
                    <li>
                      Remove poisonous houseplants, such as amaryllis,
                      mistletoe, holly, or poinsettia, or keep them in hanging
                      baskets up high, where your puppy cannot reach them.
                    </li>
                  </ul>
                  <h6>Following Weeks:</h6>
                  <ul>
                    <li>
                      People often say they don’t see their dog’s true
                      personality until several weeks after adoption. Your dog
                      may be a bit uneasy at first as he gets to know you. Be
                      patient and understanding while also keeping to the
                      schedule you intend to maintain for feeding, walks, etc.
                      This schedule will show your dog what is expected of him
                      as well as what he can expect from you.
                    </li>
                    <li>
                      People often say they don’t see their dog’s true
                      personality until several weeks after adoption. Your dog
                      may be a bit uneasy at first as he gets to know you. Be
                      patient and understanding while also keeping to the
                      schedule you intend to maintain for feeding, walks, etc.
                      This schedule will show your dog what is expected of him
                      as well as what he can expect from you.
                    </li>
                    <li>
                      To have a long and happy life together with your dog,
                      stick to the original schedule you created, ensuring your
                      dog always has the food, potty time, and attention he
                      needs. You’ll be bonded in no time! For more information
                      on creating a feeding schedule for your dog visit How
                      Often Should You Feed Your Dog?
                    </li>
                    <li>
                      If you encounter behavior issues you are unfamiliar with,
                      ask your veterinarian for a trainer recommendation. Select
                      a trainer who uses positive reinforcement techniques to
                      help you and your dog overcome these behavior obstacles.
                      Visit Dog Training for more information on reward-based
                      training.
                    </li>
                    <li>
                      Bring your puppy to the veterinarian for regular checkups.
                      Talk to your veterinarian about any signs of illness that
                      you should watch out for during your puppy’s first few
                      months.
                    </li>
                    <li>
                      Bring your puppy to the veterinarian for regular checkups.
                      Talk to your veterinarian about any signs of illness that
                      you should watch out for during your puppy’s first few
                      months.
                    </li>
                  </ul>
                  <img
                    style={{
                      width: 300,
                      height: 300,
                    }}
                    src={pic5}
                  />
                  <h6>
                    Responsibilities for the Parents of the Newly Adopted Dog:
                  </h6>
                  <p>
                    Courtesy of Rondout Valley Kennels, Inc. (Sue Sternberg
                    suesternberg.com)
                  </p>
                  <ol>
                    <li>
                      Never, ever leave a child alone with your new dog. Not
                      even for a second to turn your head and answer the phone.
                      The type of relationship we see on TV between children and
                      dogs is a fantasy, and not a reflection of what real dogs
                      can be like with children.
                    </li>
                    <li>
                      No one in the family should be encouraging rough play,
                      wrestling, or the dog to play with his mouth on human body
                      parts or clothes. This is especially relevant when an
                      adult member of the household plays with the dog in this
                      manner, because when the child next excites the dog, the
                      dog may be stimulated to play in the same rough manner,
                      thereby putting the child at risk for injury.
                    </li>
                    <li>
                      Your dog should be fed his meals in an area completely
                      protected from and away from children, as much for a bit
                      of peace and privacy as it is to prevent guarding
                      behaviors. The dog should also be fed portions that are
                      quickly finished, so there is nothing left in the bowl for
                      the dog to linger over and guard. Empty bowls should be
                      taken up and put away, so the dog won’t consider guarding
                      the feeding area.
                    </li>
                    <li>
                      Most children are not bitten by their own dog, but by a
                      friend or neighbor’s dog. This means two things: watch
                      your own dog closely when your child has a friend (or
                      friends) over. Many dogs will tolerate a lot from their
                      own family’s child, but not tolerate a visiting child.
                      Visiting children often do not behave as well as, or may
                      behave differently from your own children, and could
                      bother or provoke your dog. Consequently, if your child’s
                      friends have dogs, you need to, (as a responsible parent)
                      go over and meet the friend’s dog BEFORE you allow your
                      child to visit their house. It is a good idea to see the
                      size and general nature of your child’s friend’s dog, and
                      check to see if the owner of this dog will allow
                      unsupervised interaction between the children and the dog,
                      to ask where and when the dog is fed, and to check if
                      there are any chewable toys or bones lying around, and
                      then to either request that they be picked up and put away
                      while your child visits, or ensure that their dog has no
                      possessiveness problems.
                    </li>
                  </ol>
                  <img
                    style={{
                      width: 300,
                      height: 300,
                    }}
                    src={pic6}
                  />
                  <h6>When to Phone the Shelter for Advice:</h6>
                  <ul>
                    <li>
                      Any signs of physical rough play from the dog towards the
                      child
                    </li>
                    <li>
                      Any signs of displays of rough, physical strength from the
                      dog towards the child
                    </li>
                    <li>Any growling (even during play)</li>
                    <li>Any snapping or nipping</li>
                    <li>Any humping or mounting of the child OR adults</li>
                    <li>
                      Any avoidance or resentment of physical contact (dog backs
                      off or leaves the room when child hugs or pets or gets
                      close to your dog.)
                    </li>
                    <li>
                      Any signs the dog is afraid of the child (your dog backs
                      away or tries to escape when the child appears or gets
                      close.)
                    </li>
                    <li>
                      Your dog seems “jealous” of intimacy or physical affection
                      between parents or especially between child and parent
                      (the dog barks or cuts in between people during intimacy.)
                    </li>
                    <li>
                      Any signs the dog is guarding his food bowl, his bones,
                      his toys, or “stolen” items (the dog may tense up, freeze,
                      stiffen, growl, snap, show his teeth, snarl, or just give
                      a ‘hairy eyeball’ to anyone approaching or coming to near
                      his item.
                    </li>
                    <li>
                      Your dog seems out of control or disobedient and “wild”
                      with children who are playing or running around.
                    </li>
                  </ul>
                  <p>
                    Remember that with proper puppy care, your new pet will grow
                    into a happy, healthy dog — and provide you with love and
                    companionship for years to come.
                  </p>
                  <button onClick={() => setModalOpen2(false)}>Close</button>
                </Modal>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
              }}
              src={pic3}
            />

            <div className="card-inner">
              <div className="card-details">
                <h2>What Questions Should You Ask A Dog Breeder?</h2>
                <h5>
                  You have decided that it’s time to add a pet to your family.
                  After some consideration, you’ve fallen in love with a
                  particular dog breed. Many people then look for a dog breeder
                  to make their purebred-pup dream come true. Like any
                  responsible future pet parent, you still have some questions
                  before you take the plunge and choose your new
                </h5>
                {/* <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlesdog");
                    }}
                  >
                    Read more
                  </button>
                </div> */}
                <button onClick={() => setModalOpen3(true)}>Read more</button>
                <Modal isOpen={modalOpen3}>
                  <h2>What Questions Should You Ask A Dog Breeder?</h2>
                  <img
                    style={{
                      width: 700,
                      height: 300,
                    }}
                    src={pic7}
                  />
                  <p>
                    You have decided that it’s time to add a pet to your family.
                    After some consideration, you’ve fallen in love with a
                    particular dog breed. Many people then look for a dog
                    breeder to make their purebred-pup dream come true. Like any
                    responsible future pet parent, you still have some questions
                    before you take the plunge and choose your new dog, which
                    may be why you’re here!
                  </p>
                  <p>
                    Did you know that there are LOTS of purebred dogs waiting
                    for the perfect forever home at shelters and rescue groups?
                    Not only that, but there are also special breed-rescue
                    groups who dedicate their efforts to finding homes for just
                    one breed of dog.
                  </p>
                  <p>
                    Dogs of every type and breed can end up in shelters. Before
                    you start checking for a breeder to find your next family
                    pet, let’s take a step back and look at some things to
                    consider when starting the search for a special pup.
                  </p>
                  <h3>Think about the kind of dog who will suit you best</h3>
                  <p>Think about the kind of dog who will suit you best</p>
                  <ul>
                    <li>
                      Do you have kids? If so, how old are they and how
                      dog-savvy are they?
                    </li>
                    <li>How many hours a day are you out of the house?</li>
                    <li>
                      Do you have assistance if you are gone for long workdays?
                    </li>
                    <li>
                      What kind of energy level are you looking for in a dog?
                    </li>
                    <li>
                      Is how much a dog sheds something that’s important to you?
                    </li>
                  </ul>
                  <p>
                    Once you’ve answered these basic questions, you’ll have a
                    better picture of what characteristics you’re looking for in
                    a dog. This will help to narrow your search as you research
                    breeds based on your answers.
                  </p>
                  <p>
                    You can learn more about each unique dog breed by searching
                    our Petfinder breed guide by name, collection (largest,
                    smartest, and even hairless!), or just browse them all right
                    here. It’s fascinating to discover the history behind each
                    of the countless dog breeds. From small to large, each has a
                    unique story.
                  </p>
                  <p>
                    Even if you have your heart set on a particular breed,
                    there’s an additional factor to keep in mind: Every dog—even
                    a purebred–is distinct and individual.
                  </p>
                  <p>
                    Despite what is considered typical of a breed, you’ll need
                    to remember that every dog in the world has their own unique
                    personality (that’s why we love dogs!) and some may have
                    characteristics that aren’t commonly found within their
                    breed. Luckily, when dogs arrive with an adoption group, the
                    shelter or rescue will often do a behavioral assessment that
                    can give you more insight about an individual dog before you
                    make a decision about adopting. This pre-adoption info can
                    help you find the very best fit for your family and
                    lifestyle.
                  </p>
                  <h3>How to find a dog breed near you:</h3>
                  <p>
                    You’ve researched which breeds you’re interested in, and now
                    it’s time to get searching!
                  </p>
                  <p>
                    Begin your search for a dog (or search for a cat) by adding
                    your location, how far you’d be willing to travel, and which
                    breed you’re looking for. If you want to narrow it down
                    after your initial search, you will see options to filter it
                    by gender, age, size, and some personality traits (good with
                    other dogs, kids, etc.).
                  </p>
                  <p>
                    Once you’ve plugged in your search requirements, your
                    results will automatically sort themselves to show the dogs
                    that are closest to you first. You can click on each
                    individual dog for more information and to see which rescue
                    group or shelter is caring for that pet.
                  </p>
                  <p>
                    Don’t fret about any perceived lack of options. 25-30% of
                    dogs in search of forever homes in shelters are purebred
                    dogs, so you are bound to find a new best friend.
                  </p>
                  <p>
                    Being flexible in your search can ultimately lead you to
                    your most perfect fit. While you may have a particular breed
                    in mind, if you’re open to looking at other dogs whose
                    personality and traits match your family, you could end up
                    pleasantly surprised. There are lots of different types of
                    dogs who would love an active lifestyle and would enjoy
                    being your hiking partner, just as there are plenty who’d
                    prefer to be a lap dog and snuggle up next to you on the
                    couch. Fit is key in everyone’s happiness, so keep an open
                    mind and enjoy the adventure of choosing a new pet.
                  </p>
                  <h3>How to find a puppy near you:</h3>
                  <p>
                    If you’re specifically looking for a puppy, you want to
                    start by searching for a dog, and then narrow your search by
                    age.
                  </p>
                  <p>
                    When deciding on which age range would be best, think about
                    these things:
                  </p>
                  <ul>
                    <li>
                      Puppies are a lot of fun but are also lots of work. Do you
                      have the time to train a puppy from scratch, including
                      housebreaking?
                    </li>
                    <li>
                      Does the energy level of a puppy suit your current
                      lifestyle?
                    </li>
                    <li>
                      Do you have the time to socialize your puppy? Pups need
                      lots of structured exposure to new things in their first
                      months of life.
                    </li>
                    <li>
                      Is size important to you? A puppy’s full-grown size is
                      sometimes hard to estimate.
                    </li>
                    <li>
                      Are you prepared for any quirky personality traits or
                      behavior challenges that may arise as your puppy grows up?
                    </li>
                  </ul>
                  <h3>How to find a young or adult dog to suit your home:</h3>
                  <p>
                    When adopting an adult dog, you can specifically look for
                    one whose story matches your needs, such as being friendly
                    with other dogs, being good with children, and other past
                    history that the rescue or shelter may already have. Having
                    more history on a dog will mean fewer surprises for you as
                    an adopter.
                  </p>
                  <p>
                    Do you want a little help finding a dog who will be a
                    perfect fit for your family? If you are flexible about the
                    breed, or just want to have some fun, try taking our dog
                    selector quiz.
                  </p>
                  <p>Your perfect match is just a few clicks away!</p>
                  <h3>Your perfect match is just a few clicks away!</h3>
                  <p>
                    You are in search of a new family member and best friend.
                    The dogs on Petfinder are in search of a forever home and
                    endless love. What could be more perfect? The number of dogs
                    in need of exactly what you have to offer is
                    astounding–purebreds included. The only thing left to do is
                    get to searching!
                  </p>

                  <button onClick={() => setModalOpen3(false)}>Close</button>
                </Modal>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
              }}
              src={pic4}
            />

            <div className="card-inner">
              <div className="card-details">
                <h2>Dog Rehoming – How to Rehome Your Pet</h2>
                <h5>
                  Rehoming a dog, in the first place, is not abandonment; as a
                  matter of fact, it’s humane, mature, and responsible.
                  Secondly, while there are various problems that can
                  potentially cause pet parents to consider giving away their
                  dog, comparatively there are also solutions. Dog Rehoming
                  Issue and Solution Board I got a new job and there’s no …
                </h5>
                {/* <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlesdog");
                    }}
                  >
                    Read more
                  </button>
                </div> */}
                <button onClick={() => setModalOpen4(true)}>Read more</button>
                <Modal isOpen={modalOpen4}>
                  <h2>Dog Rehoming – How to Rehome Your Pet</h2>

                  <p>
                    Rehoming a dog, in the first place, is not abandonment; as a
                    matter of fact, it’s humane, mature, and responsible.
                    Secondly, while there are various problems that can
                    potentially cause pet parents to consider giving away their
                    dog, comparatively there are also solutions.
                  </p>
                  <h3>Dog Rehoming Issue and Solution Board</h3>
                  <Table striped bordered hover size="sm">
                    <tbody>
                      <tr>
                        <td>I got a new job and there’s no time for my dog!</td>
                        <td>
                          + Have you specifically considered a doggy day-care or
                          a dog walker?
                        </td>
                      </tr>
                      <tr>
                        <td>
                          I can’t afford my dog because of extenuating
                          circumstances! I.e., job loss.!
                        </td>
                        <td>
                          + Have you asked someone you already know if they can
                          take care of the dog until you resituate yourself?
                        </td>
                      </tr>

                      <tr>
                        <td>My new apartment doesn’t allow dogs!</td>
                        <td>
                          + In contrast, have you investigated apartments that
                          do allow dogs?
                        </td>
                      </tr>

                      <tr>
                        <td>
                          We had a baby, and moreover, we no longer have time
                          for our dog!
                        </td>
                        <td>
                          + In spite of, have you considered how having a dog
                          teaches kids about responsibility and compassion?
                        </td>
                      </tr>

                      <tr>
                        <td>
                          We had a baby, and moreover, we no longer have time
                          for our dog!
                        </td>
                        <td>
                          + In spite of, have you considered how having a dog
                          teaches kids about responsibility and compassion?
                        </td>
                      </tr>

                      <tr>
                        <td>
                          A sickness/injury is significantly preventing me from
                          taking care of my dog!
                        </td>
                        <td>
                          + First thing to remember, if your situation is
                          temporary, consider asking family or friends to help
                          and take care of your dog while you’re able to
                          recover.
                        </td>
                      </tr>

                      <tr>
                        <td>My dog is showing signs of aggression!</td>
                        <td>
                          + To clarify, fear and aggression in dogs can be
                          complex. Nevertheless, in short, consult with an
                          animal behaviorist.
                        </td>
                      </tr>

                      <tr>
                        <td>My dog does not get along with other dogs!</td>
                        <td>My dog does not get along with other dogs!</td>
                      </tr>

                      <tr>
                        <td>
                          My dog has separation anxiety, or his energy is a
                          mismatch for us! Plus, he has destruction issues!
                        </td>
                        <td>
                          + If possible, research online resources on how to
                          help an energetic dog. To be noted, a bored dog can
                          also become a destructive dog, when left alone. Make
                          sure your dog is getting plenty of mental and physical
                          stimulation. If that doesn’t help, try consulting a
                          reputable dog trainer.
                        </td>
                      </tr>

                      <tr>
                        <td>
                          My dog has health issues that I can’t afford to
                          manage.
                        </td>
                        <td>
                          + On the positive side, talk to your veterinarian
                          about payment options. Also, for instance, consider
                          programs like Care Credit.
                        </td>
                      </tr>

                      <tr>
                        <td>
                          My dog is making our allergies surprisingly
                          uncomfortable!
                        </td>
                        <td>
                          +Under those circumstances, opt to frequently clean in
                          an effort to help decrease allergies. As a result,
                          consider allergen air purifiers and allergy pills.
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <h3>How do I Rehome a Dog FAQ’s</h3>
                  <ol>
                    <li>Is it wrong to be selective when rehoming a dog?</li>
                    <p>
                      No, and Dr. Nicholas Dodman, a Veterinary Behavior
                      Specialist from Cummings School of Veterinary Medicine at
                      Tufts University says, “Choosing a canine companion based
                      on individual behavior and lifestyle compatibility is
                      crucial to the success of the relationships between people
                      and their dogs.”
                    </p>
                    <li>
                      I’ve exhausted all my options trying to keep my dog, what
                      do I do?
                      <ul>
                        <li>
                          Contact breed rescue groups: Discover numerous rescue
                          groups that, by and large, specifically help your
                          dog’s breed.
                        </li>
                        <li>
                          Rehome the dog yourself: Speak with friends and family
                          and in brief, advertise your intentions.
                        </li>
                        <li>
                          Post Dog Rehoming Ads: Hang posters on local bulletin
                          boards and on balance, post on social media.
                        </li>
                        <li>
                          Make an internet profile: Ultimately, highlight your
                          dog’s best features and behavioral qualities
                          accordingly online.
                        </li>
                      </ul>
                    </li>
                    <li>
                      How do I work with my local animal shelter or rescue
                      group?
                    </li>
                    <p>
                      Generally speaking, surrender your dog to an animal
                      shelter or a rescue organization.
                    </p>
                    <li>
                      How do I work with my local animal shelter or rescue
                      group?
                    </li>
                    <p>
                      Generally speaking, surrender your dog to an animal
                      shelter or a rescue organization.
                    </p>
                    <li>
                      What would it take to get your dog to put his best foot
                      forward towards a forever home?
                    </li>
                    <p>
                      Generally speaking, surrender your dog to an animal
                      shelter or a rescue organization.
                    </p>
                    <li>Are you able to be patient through the process? </li>
                    <p>
                      Straightaway, pet rehoming takes patience. Although, you
                      may be in a rush in rehoming your dog. On the whole,
                      finding a good fit for your dog does take time, love, and
                      patience.
                    </p>
                  </ol>
                  <h3>Rehoming Dog Tips</h3>
                  <img
                    style={{
                      width: 200,
                      height: 200,
                    }}
                    src={pic8}
                  />
                  <p>
                    Avoid Stress: In a word, advise the new family to avoid
                    anything stressful as long as the dog settles.
                  </p>
                  <p>
                    The Dog May Not Eat: Tell them not to worry if the dog won’t
                    eat on the first day. Nonetheless, he’ll eat when he’s
                    ready.
                  </p>
                  <p>
                    The Dog May Not Eat: Tell them not to worry if the dog won’t
                    eat on the first day. Nonetheless, he’ll eat when he’s
                    ready.
                  </p>
                  <p>
                    Keep in touch: Tell the new owners to call you from time to
                    time with any questions or problems.
                  </p>
                  <h3>
                    Straightaway, pet rehoming takes patience. Although, you may
                    be in a rush in rehoming your dog. On the whole, finding a
                    good fit for your dog does take time, love, and patience.
                  </h3>
                  <ul>
                    <li>Have you ever had another pet? What happened to it?</li>
                    <p>
                      The best answer is “Yes; It died at age 17.” What you
                      really don’t want to hear is that their last pet was hit
                      by a car, died of preventable disease, ran away, or worse…
                      was turned into a shelter.
                    </p>
                    <li>Do you have a pet now?</li>
                    <ul>
                      <li>
                        Already having a pet is good. It demonstrates that they
                        already know what is involved in pet ownership.
                        <ul>
                          <li>
                            If yes, then how long have you had it? In general…
                            the longer, the better.
                          </li>
                          <li>
                            If yes, then how long have you had it? In general…
                            the longer, the better.
                          </li>
                          <li>
                            If a cat, has your cat been tested for FIV (feline
                            AIDS) or FILV (feline Leukemia)? If either cat is
                            positive for one of these diseases placing them
                            together is disastrous. If a rescued cat is FIV or
                            FILV positive, place it with another known cat with
                            the same disease.
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <li>
                      If you have another dog/cat, is it altered? Will you be
                      altering (spaying/neutering) the cat/dog when it reaches
                      sexual maturity?
                    </li>
                    <ul>
                      <li>
                        The good answer is yes: spay/neuter prevents unwanted
                        pet births, decreasing the euthanasia happening in
                        shelters because of too many companion animals and not
                        enough companion homes. Also, spay/neuter prevents
                        cancer and decreases the likelihood that a pet will run
                        away from home or get into fights.
                      </li>
                    </ul>
                    <li>
                      Do you own your home or rent? Do you have a fenced yard?
                    </li>
                    <ul>
                      <li>
                        Ask to see a copy of their lease allowing pets if they
                        rent. Or ask to use their landlord as a reference.
                        Fenced yards are best, but aren’t always possible. In
                        some parts of the country, they aren’t always necessary
                        (very rural farmland). Make sure the potential adopter
                        is interested in exercising their new pet. Some dogs
                        should get up to three or four miles of exercise a day.
                        “My apartment doesn’t allow pets” is one of the top
                        three reasons that pets are taken to shelters.
                      </li>
                    </ul>
                    <li>Will you provide references?</li>
                    <ul>
                      <li>
                        Many organizations require three, one being a
                        veterinarian. Sometimes they find the person had no
                        record at the vet, a family member remarks about how
                        much the potential adopter loves to travel abroad each
                        month, or perhaps what really happened to their last
                        pet. Although these situations are not the norm–with the
                        time, money, and energy you are investing in this pet–be
                        sure! You aren’t interested in an adopter who will not
                        provide veterinary care for this pet.
                      </li>
                    </ul>
                    <li>
                      Will the pet be a member of your family or a gift for
                      someone else?
                    </li>
                    <ul>
                      <li>
                        It is important that everyone who will be living with
                        the pet meet it first. This minimizes the chances of the
                        pet being returned to you, winding up at a shelter, or
                        being abused or neglected.
                      </li>
                    </ul>
                    <li>Are you willing to allow a home check?</li>
                    <ul>
                      <li>
                        Some rescue groups always do a home check. This verifies
                        the individual has given you a real address. You might
                        consider taking your pet, to see his/her reaction to the
                        home and the people. If one of the family members never
                        gets off the couch or turns the TV down to meet you and
                        your pet, it is probably not going to be the best home.
                        Some organizations also go back to the home one week
                        after adoption. This gives them an opportunity to see
                        that the pet is happy. It also gives the adopter a
                        chance to return the pet if there is a problem. NEVER DO
                        A HOME CHECK ALONE! REMEMBER THE BUDDY SYSTEM!
                      </li>
                    </ul>
                    <li>
                      Do you plan on crating the dog? For how long each day?
                    </li>
                    <ul>
                      <li>
                        Think twice before you adopt a young puppy or kitten to
                        a home where they will be alone for more than four hours
                        a day. New owners should be willing to adopt on a
                        weekend or on vacation time to allow the youngster to
                        adjust to new conditions. Older dogs and cats can
                        withstand being alone for a normal working day. Eight to
                        10 hours is possible but should be followed by good
                        exercise/playtime, which is difficult for people that
                        have themselves worked a 10 hour day.
                      </li>
                    </ul>
                    <li>
                      If the pet has an accident in the house, what type of
                      correction do you plan to use?
                    </li>
                    <ul>
                      <li>
                        Think twice before you adopt a young puppy or kitten to
                        a home where they will be alone for more than four hours
                        a day. New owners should be willing to adopt on a
                        weekend or on vacation time to allow the youngster to
                        adjust to new conditions. Older dogs and cats can
                        withstand being alone for a normal working day. Eight to
                        10 hours is possible but should be followed by good
                        exercise/playtime, which is difficult for people that
                        have themselves worked a 10 hour day.
                      </li>
                    </ul>
                    <li>How many hours per day will the pet be alone?</li>
                    <ul>
                      <li>
                        Think twice before you adopt a young puppy or kitten to
                        a home where they will be alone for more than four hours
                        a day. New owners should be willing to adopt on a
                        weekend or on vacation time to allow the youngster to
                        adjust to new conditions. Older dogs and cats can
                        withstand being alone for a normal working day. Eight to
                        10 hours is possible but should be followed by good
                        exercise/playtime, which is difficult for people that
                        have themselves worked a 10 hour day.
                      </li>
                    </ul>
                    <li>
                      Do you have children? How old are they? Have they ever
                      been around pets?
                    </li>
                    <ul>
                      <li>
                        Children should not be expected to be responsible for
                        the pet. If that is suggested, think red alert! Very
                        young kids may be hurt by or may hurt the new pet. This
                        is a personal issue, based mostly on the type of family
                        you are talking to. Tread carefully, here. Some
                        organizations have a strict policy regarding adoptions
                        to families with children under five. Others judge on a
                        one-on-one basis. This is where your people skills come
                        in. Make sure you meet the kids!
                      </li>
                    </ul>
                    <li>Will the pet be going outside at all?</li>
                    <ul>
                      <li>
                        Cats that go outside have a significantly reduced
                        expected life-span, get hit by cars, poisoned
                        intentionally, poisoned unintentionally, get feline aids
                        for which there is no vaccine, get feline leukemia for
                        which the vaccine is only 70% effective, get into
                        fights, get fleas, get lost, etc. You want to hear that
                        this will be an indoor cat (unless you are placing a
                        vaccinated wild cat on a farm or in a rural area).
                        Outdoor/indoor is okay for dogs, but remember, dogs are
                        pack animals and want to be where you are. Leaving a dog
                        outside when the rest of his family is inside may be a
                        lonely experience for the dog.
                      </li>
                    </ul>
                    <li>Will you be declawing the cat?</li>
                    <ul>
                      <li>
                        Declawed cats are more likely to become biters and/or
                        forget litter box training. Many people are very opposed
                        to declawing (or see it as a last resort) because of the
                        gruesome nature of the surgery. At best, it should be
                        done at the same time as altering.
                      </li>
                    </ul>
                    <li>
                      Do you realize that cats can live for more than 20 years?
                      Do you realize that dogs can live for more than 15 years?
                    </li>
                    <ul>
                      <li>This is a lifetime commitment.</li>
                    </ul>
                  </ul>
                  <button onClick={() => setModalOpen4(false)}>Close</button>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesDog;
