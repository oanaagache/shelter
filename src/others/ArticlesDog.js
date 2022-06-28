import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/image4.svg";
import pic1 from "./images/image6.jpg";
import pic2 from "./images/image7.jpg";
import pic3 from "./images/image8.jpg";
import pic4 from "./images/image9.jpg";
import pic5 from "./images/image14.jpg";
import pic6 from "./images/image15.jpg";
import { Link } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ArticlesDog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  let navigate = useNavigate();

  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img style={({ height: 1 }, { padding: 10 })} src={logo} />
            <h2>
              <Link to="/">Back</Link>
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
                <button onClick={() => setModalOpen(true)}>Read more</button>
                <Modal isOpen={modalOpen}>
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
                  <button onClick={() => setModalOpen(false)}>Close</button>
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
                <button onClick={() => setModalOpen(true)}>Read more</button>
                <Modal isOpen={modalOpen}>
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
                  <button onClick={() => setModalOpen(false)}>Close</button>
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
                <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlesdog");
                    }}
                  >
                    Read more
                  </button>
                </div>
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
                <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlesdog");
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesDog;
