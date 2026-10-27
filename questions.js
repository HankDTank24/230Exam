// MAE 230 study guide question bank.
// Each question:
//   id     unique id
//   src    "sample" (from the instructor's Sample Exam Questions) or "practice" (written from the lectures)
//   topic  key into TOPICS
//   q      question text (may contain simple HTML such as <b>, <br>, <ol>)
//   img    optional image path
//   opts   answer options (in order a, b, c, ...)
//   ans    index of the correct option (0 = a)
//   exp    explanation of the correct answer
//   why    optional array, same length as opts: why each WRONG option is wrong (null for the correct one)

const TOPICS = {
  intro:   "Intro & Neural Engineering",
  brain:   "Brain Anatomy",
  stroke:  "Stroke & Brain Injury",
  spinal:  "Spinal Cord & SCI",
  tracts:  "Spinal Tracts, Motor Units & Reflexes",
  sensory: "Sensory Tracts, Receptors & Motor Control",
  walking: "Neural Control of Walking",
  mech:    "Movement Mechanics"
};

const QUESTIONS = [
/* ===================== SAMPLE EXAM QUESTIONS ===================== */
{
  id: "S1", src: "sample", topic: "spinal",
  q: "A patient with an incomplete spinal cord injury has weakness affecting all four limbs, impaired diaphragm function causing substantial difficulty breathing, and loss of voluntary bowel and bladder control. Which spinal cord region most likely contains the injury?",
  opts: ["High cervical spinal injury (C1-C4)", "High thoracic spinal cord injury (T1-T6)", "Low thoracic spinal cord injury (T7-T12)", "Lumbar spinal cord injury (L1-L5)", "Sacral nerves (S1-S5)"],
  ans: 0,
  exp: "Two clues point to the high cervical cord. (1) All four limbs are weak (quadriplegia/tetraplegia), which only happens with a cervical injury because the arms are supplied by C5-T1. (2) The diaphragm is impaired; the lecture lists the diaphragm as affected with injuries at <b>C4 or higher</b>. Bowel/bladder loss fits because everything below the injury can be affected.",
  why: [null,
    "Thoracic injuries generally spare the arms and hands (paraplegia) and leave the diaphragm (C4 and above) intact; they affect intercostals and trunk.",
    "Low thoracic injuries affect the legs, trunk and abdominal muscles (T7-T12) but spare the arms and diaphragm.",
    "Lumbar injuries cause leg weakness and bowel/bladder dysfunction, but shoulders, arms and hands are usually unaffected.",
    "Sacral injuries mainly cause bowel, bladder and sexual dysfunction, with possible hip/leg weakness. Arms and breathing are not affected."]
},
{
  id: "S2", src: "sample", topic: "brain", img: "images/brain-regions.png",
  q: "Using the labels in the brain diagram above, which labeled region contains the primary visual cortex?",
  opts: ["A", "B", "C", "D", "E", "F"],
  ans: 4,
  exp: "The primary visual cortex is in the <b>occipital lobe</b> at the back of the brain (region E, green). The lecture lists the occipital lobe's role as visual processing.",
  why: ["A is the frontal lobe: motor planning and execution, thinking and reasoning.",
    "B is the strip just in front of the central sulcus, the primary motor cortex (Brodmann area 4).",
    "C is the strip just behind the central sulcus, the primary somatosensory cortex (Brodmann areas 3, 1, 2).",
    "D is the parietal lobe: sensory processing and perception.",
    null,
    "F is the temporal lobe: auditory and olfactory processing and language centers."]
},
{
  id: "S3", src: "sample", topic: "stroke",
  q: "A stroke survivor has weakness affecting the arm and leg on one side of the body, with some voluntary movement preserved. They also have increased muscle tone that produces resistance to passive movement. This resistance does not increase appreciably when the therapist moves the limb faster. Which pair of terms best describes these findings?",
  opts: ["Upper limb hemiparesis and hypertonia", "Upper limb spasticity and hypertonia", "Upper limb hemiparesis and spasticity", "Bilateral paresis and spasticity", "Bilateral paresis and hypertonia"],
  ans: 0,
  exp: "<b>Hemiparesis</b> means weakness (not full paralysis) on one side of the body, which matches 'one side' and 'some voluntary movement preserved'. Both hypertonia and spasticity are resistance to movement, but <b>hypertonia is NOT velocity dependent</b>, while <b>spasticity IS velocity dependent</b>. Because resistance did not increase with speed, this is hypertonia.",
  why: [null,
    "Spasticity is velocity dependent. Here resistance did not increase with speed, and this option also does not describe the one-sided weakness.",
    "Hemiparesis is right, but spasticity would show more resistance when the limb is moved faster.",
    "Weakness is on one side only, so it is not bilateral, and the tone finding is not velocity dependent.",
    "Hypertonia is right, but the weakness is on one side (hemi-), not bilateral."]
},
{
  id: "S4", src: "sample", topic: "tracts",
  q: "Select the option that correctly fills in the blanks.<br><br>_______ carry motor commands from the spinal cord to skeletal muscle fibers. Those that innervate the same muscle are grouped into a _______. A _______ consists of one _______ and all the muscle fibers it innervates.",
  opts: ["motor units, pool, motor neuron, motor unit", "motor pools, units, motor neuron, motor pool", "motor neurons, pool, motor unit, motor neuron", "motor neurons, units, motor pool, motor neuron", "This one is a freebie, don't pick me ;-)"],
  ans: 2,
  exp: "<b>Motor neurons</b> (motoneurons) are the final link from the spinal cord to muscle. All motor neurons that innervate a single muscle form a <b>motor (neuronal) pool</b>. A <b>motor unit</b> is one <b>motor neuron</b> plus all the muscle fibers it innervates.",
  why: ["A motor unit includes muscle fibers, so it does not 'carry commands'. The definition at the end is also reversed.",
    "Pools do not carry commands. A pool is the group of motor neurons for one muscle, not 'one neuron plus its fibers'.",
    null,
    "Motor neurons for one muscle form a pool, not 'units'. And one neuron plus its fibers is a motor unit, not a pool.",
    "As promised, it's a freebie. Don't pick it!"]
},
{
  id: "S5", src: "sample", topic: "sensory",
  q: "In sensorimotor control, a _______ is an internal copy of an outgoing motor command that can be used to predict its sensory consequences. _______ is sensory input caused by external events rather than by the individual's own movement. Select the option that correctly fills in the blanks.",
  opts: ["Efference copy; reafference", "Reafference; exafference", "Exafference; efference copy", "Efference copy; exafference", "Reafference; efference copy"],
  ans: 3,
  exp: "<b>Efference copy</b> (corollary discharge) is a copy of the motor command sent to higher control centers and used to form an expectation. <b>Exafference</b> is sensory stimulation from the external environment. (<b>Reafference</b> is sensation that results from your own actions.)",
  why: ["First blank is right, but reafference is sensation caused by your OWN movement, the opposite of the second definition.",
    "Reafference is sensory input, not a copy of a motor command.",
    "Exafference is sensory input from the environment, not an internal copy of a motor command.",
    null,
    "Both are swapped: reafference is sensory input from your own movement, and an efference copy is not sensory input."]
},
{
  id: "S6", src: "sample", topic: "stroke",
  q: "A stroke survivor has trouble verbally communicating and their symptoms include: difficulty finding and saying words; reduced language output, limited vocabulary, and short sentences; difficulty writing, but can read and understand when spoken to. This individual likely suffered from a stroke that:",
  opts: ["Damaged the Broca's area most likely on the right side of the brain.", "Damaged the Wernicke's area most likely on the left side of the brain.", "Damaged the Broca's area most likely on the left side of the brain.", "Damaged the Wernicke's area most likely on the right side of the brain.", "Damaged the Anomic area which is most often present bilaterally."],
  ans: 2,
  exp: "This is a textbook <b>Broca's (non-fluent, expressive) aphasia</b>: they know what they want to say but struggle to produce it, and comprehension is preserved. Paul Broca linked this to damage of the <b>left frontal lobe</b> (Broca's area). A left MCA superficial-division stroke classically causes it.",
  why: ["Broca's is right, but language areas are on the left (dominant) hemisphere in most people.",
    "Wernicke's (fluent/receptive) aphasia impairs understanding. This patient understands spoken language.",
    null,
    "Wernicke's aphasia impairs comprehension, and it is typically left-hemisphere.",
    "Anomic aphasia is a TYPE of aphasia (vague, word-finding difficulty), not a discrete 'Anomic area' present bilaterally."]
},
{
  id: "S7", src: "sample", topic: "tracts",
  q: "Which of the following is <b>NOT required</b> for a spinal reflex to produce a muscle contraction?",
  opts: ["Activation of a sensory receptor", "A descending motor command from the cerebrum", "Activity in a sensory neuron", "Synaptic transmission within the spinal cord", "Activity in a motor neuron supplying the responding muscle"],
  ans: 1,
  exp: "The five reflex components are: (1) a stimulus activates a receptor, (2) a sensory neuron fires, (3) information is processed (for a spinal reflex, in the spinal cord), (4) a motor neuron is activated, (5) the effector (muscle) responds. A <b>spinal</b> reflex is processed in the cord, so <b>no descending command from the brain is needed</b>.",
  why: ["Required: step 1 of the reflex arc.", null, "Required: step 2 of the reflex arc.", "Required: step 3. For a spinal reflex the processing happens in the spinal cord.", "Required: steps 4 and 5. The motor neuron activates the effector muscle."]
},
{
  id: "S8", src: "sample", topic: "mech", img: "images/body-planes.png",
  q: "Using the terminology we discussed in class, select the option that names the body planes in the order of A, B, and C.",
  opts: ["A = Coronal plane, B = Transverse plane, C = Sagittal plane", "A = Transverse plane, B = Sagittal plane, C = Coronal plane", "A = Sagittal plane, B = Transverse plane, C = Coronal plane", "A = Sagittal plane, B = Coronal plane, C = Transverse plane", "This one is a freebie, don't pick me ;-)"],
  ans: 3,
  exp: "<b>A: Sagittal</b>, a vertical plane dividing the body into left and right. <b>B: Coronal</b> (frontal), a vertical plane dividing the body into front (ventral) and back (dorsal). <b>C: Transverse</b>, a horizontal plane dividing the body into upper (cranial) and lower (caudal) parts.",
  why: ["A runs front-to-back (sagittal), and C is horizontal (transverse).",
    "A is vertical, so it can't be transverse. The horizontal plane is C.",
    "B faces the front of the body (coronal), and C is the horizontal (transverse) plane.",
    null,
    "As promised, it's a freebie. Don't pick it!"]
},
{
  id: "S9", src: "sample", topic: "walking",
  q: "Consider the following observations in walking cats:<ol><li>Stretching the hip flexor muscles near the end of stance facilitates the transition to swing.</li><li>Maintaining a load on the ankle extensor muscles near the end of stance delays the transition to swing.</li><li>Unloading the ankle extensor muscles near the end of stance facilitates the transition to swing.</li></ol>Which combination of observations is most consistent with the role of load-sensitive feedback from Golgi tendon organs in regulating the stance-to-swing transition?",
  opts: ["Observation 1 only", "Observation 2 only", "Observations 1 and 2", "Observations 2 and 3", "Observations 1, 2, and 3"],
  ans: 3,
  exp: "Golgi tendon organs sense <b>force/load</b> in the ankle extensors (Pearson & Duysens). Load keeps the leg in stance (observation 2), and losing the expected load lets the leg flex into swing (observation 3). Observation 1 is about <b>stretch</b> of the hip flexors, which is the <b>muscle spindle</b> hypothesis (Grillner & Rossignol), not GTO load feedback.",
  why: ["Observation 1 is about stretch (muscle spindles in the hip flexors), not load-sensitive GTO feedback.",
    "Correct but incomplete: observation 3 (unloading leads to swing) is the other half of the same GTO mechanism.",
    "Observation 1 is the muscle spindle (hip flexor stretch) mechanism, not GTO load.",
    null,
    "Observation 1 is about muscle spindle stretch feedback, so it doesn't belong with the GTO evidence."]
},

/* ===================== INTRO / NEURAL ENGINEERING ===================== */
{
  id: "P-I1", src: "practice", topic: "intro",
  q: "Which statement best matches the definition of <b>neural engineering</b> used in class (Ereifej et al., 2019)?",
  opts: ["The surgical treatment of neurological disease by clinicians", "The application of neuroscientific and engineering approaches to understand, repair, replace, enhance, or exploit the properties of neural systems", "The mapping of cortical areas based on cytoarchitecture", "The design of robots that move without any human input", "The statistical study of human body proportions"],
  ans: 1,
  exp: "Neural engineering is '…the application of neuroscientific and engineering approaches to understand, repair, replace, enhance, or exploit the properties of neural systems, as well as to design solutions to problems associated with neurological limitations and dysfunction.' Jon's translation: pairing neuroscience and engineering to understand the nervous system and/or address impairment.",
  why: ["Clinicians are one part of the team, but neural engineering is interdisciplinary, not only clinical treatment.", null, "That describes Brodmann's work (brain anatomy), not neural engineering.", "This has no neuroscience or neural-system component.", "That describes anthropometrics."]
},
{
  id: "P-I2", src: "practice", topic: "intro",
  q: "According to the National Academies definition discussed in class, what makes research <b>interdisciplinary</b>?",
  opts: ["It is conducted by a single expert who has studied multiple fields", "It integrates information, techniques, tools, perspectives or theories from two or more disciplines to solve problems beyond the scope of a single discipline", "It is published in more than one journal", "It must include human participants", "It is performed at more than one university"],
  ans: 1,
  exp: "Interdisciplinary research integrates data, techniques, tools, perspectives, concepts and/or theories from two or more disciplines to advance understanding or solve problems whose solutions are <b>beyond the scope of a single discipline</b>. Jon's translation: integrating expertise across specializations to solve a problem no single discipline could. It can be done by teams <i>or</i> individuals.",
  why: ["The definition allows teams or individuals; what matters is integrating disciplines, not one person's résumé.", null, "Where it's published doesn't define it.", "Human participants aren't required.", "Multiple institutions aren't the defining feature."]
},

/* ===================== BRAIN ANATOMY ===================== */
{
  id: "P-B1", src: "practice", topic: "brain", img: "images/brain-regions.png",
  q: "Using the labels in the brain diagram above, which labeled region contains Brodmann area 4, the area that sends commands to the muscles to carry out movement?",
  opts: ["A", "B", "C", "D", "E", "F"],
  ans: 1,
  exp: "Brodmann area 4 is the <b>primary motor cortex</b>, the strip of frontal lobe just <b>in front of</b> the central sulcus (B). It's organized as the motor homunculus (Penfield).",
  why: ["A is the rest of the frontal lobe (planning, reasoning), not the primary motor strip.", null, "C is just behind the central sulcus: the primary somatosensory cortex (areas 3, 1, 2).", "D is the parietal lobe (sensory processing, perception).", "E is the occipital lobe (vision).", "F is the temporal lobe (auditory, olfactory, language)."]
},
{
  id: "P-B2", src: "practice", topic: "brain", img: "images/brain-regions.png",
  q: "A patient has a small lesion confined to one labeled region in the diagram above. They can still move their hand normally, but they can no longer tell the position of their fingers or identify a key in their pocket by touch. Which region was most likely damaged?",
  opts: ["A", "B", "C", "D", "E", "F"],
  ans: 2,
  exp: "Region C is the <b>primary somatosensory cortex</b> (Brodmann 3, 1, 2), just behind the central sulcus. It interprets body position, force on the body, and the shape/texture of objects without vision, the abilities behind <b>stereognosis</b>. Motor function is spared because the motor cortex (B) is intact.",
  why: ["The frontal lobe handles motor planning and reasoning, not body-position sense.", "B is the primary motor cortex; damage there would weaken the hand, but movement is normal.", null, "D (posterior parietal/association areas) helps with sensory integration and visually guided reaching, but the primary interpretation of touch and position happens in C.", "The occipital lobe is visual.", "The temporal lobe is auditory/olfactory/language."]
},
{
  id: "P-B3", src: "practice", topic: "brain",
  q: "Axons that connect the left and right hemispheres through the corpus callosum and anterior commissure are classified as:",
  opts: ["Association fibers", "Commissural fibers", "Projection fibers", "Extrapyramidal fibers", "Afferent fibers"],
  ans: 1,
  exp: "<b>Commissural</b> fibers cross between the two hemispheres. The two main pathways are the <b>corpus callosum</b> and the <b>anterior commissure</b>.",
  why: ["Association fibers stay within the same hemisphere.", null, "Projection fibers travel vertically, e.g., motor cortex → internal capsule → brainstem → spinal cord.", "Extrapyramidal refers to descending spinal tracts (rubro-, reticulo-, vestibulospinal), not brain white-matter categories.", "Afferent describes sensory direction (toward the CNS), not the three brain fiber types."]
},
{
  id: "P-B4", src: "practice", topic: "brain",
  q: "Projection fibers from the primary motor cortex travel down through the _______ into the brainstem and finally to the spinal cord.",
  opts: ["Corpus callosum", "Anterior commissure", "Internal capsule", "Dorsal columns", "Central sulcus"],
  ans: 2,
  exp: "Projection fibers from the primary motor cortex descend through the <b>internal capsule</b>, then the brainstem, and into the spinal cord. (This is also why small lenticulostriate strokes that hit the internal capsule cause pure motor hemiparesis.)",
  why: ["The corpus callosum connects the hemispheres (commissural).", "The anterior commissure also connects the hemispheres (commissural).", null, "The dorsal columns are ascending sensory tracts in the spinal cord.", "The central sulcus is a groove separating the frontal and parietal lobes, not a fiber pathway."]
},
{
  id: "P-B5", src: "practice", topic: "brain",
  q: "A participant is asked to pick up a glass of water that appears at different places on a table. Neurons that fire during this eye-arm coordination and help determine the route the arm should take are most likely located in the:",
  opts: ["Primary visual cortex", "Posterior parietal cortex", "Supplementary motor area", "Brodmann area 3a", "Temporal lobe"],
  ans: 1,
  exp: "The <b>posterior parietal cortex</b> transforms visual information into motor commands, e.g., planning the arm's path to a glass based on where it is in space. Its neurons fire when arm and eye coordination is needed.",
  why: ["Primary visual cortex processes the image itself but doesn't turn it into a motor plan.", null, "The SMA is more involved in internally generated movements, bimanual control and trunk/proximal muscles.", "Area 3a deals with proprioception input from the thalamus.", "The temporal lobe handles auditory/olfactory processing and language."]
},
{
  id: "P-B6", src: "practice", topic: "brain",
  q: "Which motor area is described as having more of a role in <b>internally generated</b> movements, bimanual control, and control of trunk and proximal limb muscles?",
  opts: ["Primary motor cortex", "Premotor cortex", "Supplementary motor area (SMA)", "Posterior parietal cortex", "Primary somatosensory cortex"],
  ans: 2,
  exp: "The <b>SMA</b> is involved in planning motor actions, bimanual control, and trunk/proximal limb muscles, and appears more important for <b>internally generated</b> movements. The <b>premotor cortex</b>, by contrast, is more important for movements made <b>in response to external events</b>.",
  why: ["The primary motor cortex sends the actual commands to muscles; it isn't singled out for internally generated planning.", "The premotor cortex is more important for movements in response to EXTERNAL events.", null, "The posterior parietal cortex converts visual information into motor commands.", "The somatosensory cortex is sensory, not motor planning."]
},
{
  id: "P-B7", src: "practice", topic: "brain",
  q: "Fill in the blanks: The primary motor cortex is Brodmann area ___, and the primary somatosensory cortex is Brodmann areas ___.",
  opts: ["4; 1, 2, and 3", "1; 2, 3, and 4", "17; 4 and 6", "3; 1, 2, and 4", "6; 41 and 42"],
  ans: 0,
  exp: "Motor cortex = <b>area 4</b>. Sensory cortex = <b>areas 3, 1, 2</b> (with 3 split into 3a and 3b). Brodmann mapped these areas in 1909 based on cytoarchitecture using Nissl staining.",
  why: [null, "Area 4 is motor, not sensory.", "These are not the motor/sensory numbers given in lecture.", "Area 3 is sensory and area 4 is motor; this swaps them.", "Not the areas given in lecture for primary motor/sensory cortex."]
},
{
  id: "P-B8", src: "practice", topic: "brain",
  q: "Within the primary somatosensory cortex, a lesion confined to Brodmann <b>area 2</b> would most likely produce a deficit in:",
  opts: ["Discriminating the size and shape of objects", "Discriminating texture only", "Producing voluntary movement", "Understanding spoken language", "Recognizing faces"],
  ans: 0,
  exp: "Areas 1 and 2 receive dense inputs from area 3b. The projection from 3b to <b>area 1</b> mainly relays <b>texture</b>; the projection to <b>area 2</b> emphasizes <b>size and shape</b>. Lesions there produce predictable deficits in those discriminations.",
  why: [null, "Texture is mainly area 1.", "Voluntary movement depends on the motor cortex (area 4).", "Language comprehension is Wernicke's area (temporal lobe).", "Face recognition problems (prosopagnosia) come from fusiform gyrus lesions."]
},
{
  id: "P-B9", src: "practice", topic: "brain",
  q: "Brodmann area 3b is considered the 'true' primary somatosensory cortex. Which of the following is <b>NOT</b> one of the reasons given?",
  opts: ["Its neurons are highly responsive to somatosensory stimuli but not other stimuli", "Lesions there impair somatic sensation", "Electrical stimulation there evokes a somatic sensory experience", "It sends commands directly to muscles to produce movement", "All of the above are reasons"],
  ans: 3,
  exp: "Area 3b counts as the 'true' PSC because (1) its neurons respond selectively to somatosensory stimuli, (2) lesions impair somatic sensation, and (3) stimulation evokes somatic sensations. Sending commands to muscles is the job of the <b>primary motor cortex (area 4)</b>.",
  why: ["This is one of the three listed reasons.", "This is one of the three listed reasons.", "This is one of the three listed reasons.", null, "Option d is not a reason, so 'all of the above' can't be right."]
},
{
  id: "P-B10", src: "practice", topic: "brain",
  q: "<b>Stereognosis</b> (haptic perception) is the ability to recognize objects by touch alone. Which statement about it is correct?",
  opts: ["It relies only on passive skin input; moving the fingers is unnecessary", "It requires input from both sensory (skin) and motor (feedback) systems, and moving the hands and fingers improves it", "It depends mainly on visual cues", "It is a function of the occipital lobe", "It only uses temperature information"],
  ans: 1,
  exp: "Stereognosis ('seeing with your hands') requires <b>both sensory and motor systems</b>. It uses texture, size, spatial properties and temperature, and you need to <b>move your hands and fingers</b> to get the full use of these cues. It happens without visual or auditory clues.",
  why: ["The lecture stresses that you must move your hands and fingers to get full use of the tactile cues.", null, "By definition it happens without visual or auditory clues.", "The occipital lobe is visual; touch interpretation is somatosensory cortex.", "It uses texture, size, spatial properties AND temperature."]
},
{
  id: "P-B11", src: "practice", topic: "brain",
  q: "During normal REM sleep we don't act out our dreams. Which structures suppress motor neuron activation to produce this muscle atonia (and are implicated in sleep paralysis)?",
  opts: ["Cerebellum and basal ganglia", "Pons and medulla", "Thalamus and hypothalamus", "Occipital and temporal lobes", "Dorsal root ganglia"],
  ans: 1,
  exp: "During REM sleep the <b>pons and medulla</b> suppress motor neuron activation, leaving muscles flaccid. Sleep paralysis happens between wakefulness and REM: the person is aware but this suppression is still active, so they can't move or speak.",
  why: ["These modulate movement but aren't the structures named for REM atonia.", null, "The thalamus relays sensory/motor information; not named for REM atonia.", "These are cortical sensory areas (vision, hearing).", "DRGs contain sensory cell bodies; they don't suppress motor neurons."]
},
{
  id: "P-B12", src: "practice", topic: "brain",
  q: "Which of the following functions is controlled by the <b>autonomic</b> nervous system?",
  opts: ["Voluntary flexion of the elbow", "Regulation of heart rate, digestion and respiratory rate", "Relaying touch signals from the skin to the spinal cord", "Planning a reach toward a cup", "Recognizing faces"],
  ans: 1,
  exp: "The <b>autonomic</b> nervous system regulates bodily functions such as heart rate, digestion and respiratory rate. The CNS is the brain and spinal cord; the PNS relays between the body and the CNS.",
  why: ["Voluntary movement is controlled by the motor cortex and corticospinal tracts.", null, "That's a peripheral nervous system relay.", "Motor planning happens in cortical areas (premotor, SMA, posterior parietal).", "Face recognition is a cortical function (fusiform gyrus)."]
},
{
  id: "P-B13", src: "practice", topic: "brain",
  q: "Why are the hands and lips drawn so large on Penfield's motor homunculus?",
  opts: ["Because these body parts contain the most muscle mass", "Because a disproportionately large area of motor cortex is devoted to their fine control", "Because they are closest to the brain", "Because they are controlled by the same hemisphere (ipsilateral)", "Because they have no sensory receptors"],
  ans: 1,
  exp: "The homunculus represents how much <b>cortical territory</b> is devoted to each body part, not its physical size. Regions that need fine, precise control (hands, fingers, lips, tongue) get a disproportionately large share of the motor cortex.",
  why: ["The legs and trunk have far more muscle mass but small cortical representation.", null, "Distance from the brain is irrelevant.", "The motor cortex controls the OPPOSITE side of the body.", "Hands and lips are densely packed with sensory receptors (which is why they are also big on the sensory homunculus)."]
},
{
  id: "P-B14", src: "practice", topic: "brain",
  q: "Cerebrospinal fluid (CSF) serves several functions. Which of the following is <b>NOT</b> a function of CSF listed in lecture?",
  opts: ["Cushioning the brain and spinal cord", "Giving buoyancy to the brain", "Helping clear wastes and metabolic toxins", "Conducting action potentials between hemispheres", "Immunological protection"],
  ans: 3,
  exp: "CSF is a weak salt solution that cushions the brain and spinal cord, gives the brain buoyancy, helps prevent ischemia, provides immunological protection, and helps clear wastes. Signals travel between hemispheres through <b>commissural axons</b> (corpus callosum), not through CSF.",
  why: ["Listed function.", "Listed function.", "Listed function.", null, "Listed function."]
},

/* ===================== STROKE & BRAIN INJURY ===================== */
{
  id: "P-St1", src: "practice", topic: "stroke",
  q: "A 68-year-old has a sudden stroke. Imaging shows a clot blocking a cerebral artery, with no bleeding. This is classified as a(n) _______ stroke, which accounts for roughly _______ of strokes.",
  opts: ["Hemorrhagic; 13%", "Ischemic; 87%", "Ischemic; 13%", "Hemorrhagic; 87%", "Lacunar; 50%"],
  ans: 1,
  exp: "An <b>ischemic</b> stroke is caused by a lack of blood flow from a blockage in an artery, and it makes up about <b>87%</b> of strokes. <b>Hemorrhagic</b> strokes (bleeding from a ruptured vessel) make up about 13%.",
  why: ["Hemorrhagic means a ruptured vessel bleeding into the brain; there is no bleeding here.", null, "The type is right but the percentage belongs to hemorrhagic strokes.", "Wrong type and wrong percentage.", "Not a category from lecture."]
},
{
  id: "P-St2", src: "practice", topic: "stroke",
  q: "A patient has weakness of the right face and right arm and speaks in short, effortful phrases, but understands everything said to them. Which arterial territory was most likely affected?",
  opts: ["Right MCA, superficial division", "Left MCA, superficial division", "Right MCA, lenticulostriate branches", "Left MCA, lenticulostriate branches", "Both MCAs equally"],
  ans: 1,
  exp: "Right-sided face/arm weakness means the <b>left</b> motor cortex. Non-fluent speech with intact comprehension is <b>Broca's aphasia</b>, which comes from damage to Broca's area in the left frontal lobe. Both cortical areas are supplied by the <b>left MCA superficial division</b>.",
  why: ["A right MCA stroke would cause LEFT face/arm weakness and possibly left hemineglect, not aphasia.", null, "That would cause left-sided weakness, and a deep (lenticulostriate) infarct causes PURE motor hemiparesis without cortical signs like aphasia.", "Left lenticulostriate infarcts give pure right hemiparesis; aphasia points to cortical (superficial division) damage.", "The deficits are one-sided."]
},
{
  id: "P-St3", src: "practice", topic: "stroke",
  q: "After a stroke, a patient eats only the food on the right side of their plate and shaves only the right side of their face. Sensory testing shows they can feel touch on both sides. Which deficit and lesion location fit best?",
  opts: ["Left hemineglect from a right hemisphere (right MCA) lesion", "Right hemineglect from a left hemisphere lesion", "Prosopagnosia from a fusiform gyrus lesion", "Apraxia from a left frontal lesion", "Agraphia from a right occipital lesion"],
  ans: 0,
  exp: "<b>Hemineglect</b> is a deficit in attention to and awareness of one side of space that is <b>not due to a lack of sensation</b>. It is most often caused by <b>right</b> hemisphere damage, producing <b>left</b> neglect. The lecture lists 'left hemineglect' as a possible result of a right MCA superficial-division stroke.",
  why: [null, "They ignore the LEFT side, and neglect usually follows RIGHT hemisphere damage.", "Prosopagnosia is the inability to recognize faces.", "Apraxia is the inability to perform learned purposeful movements despite the desire and physical capacity.", "Agraphia is the inability to communicate through writing."]
},
{
  id: "P-St4", src: "practice", topic: "stroke",
  q: "A patient presents with weakness of the right face, arm and leg. There is no aphasia, no sensory loss and no neglect. A small deep infarct is suspected. Which description fits best?",
  opts: ["Left MCA superficial division infarct", "Right MCA superficial division infarct", "Left MCA lenticulostriate infarct affecting the basal ganglia and genu of the internal capsule", "Right MCA lenticulostriate infarct affecting the basal ganglia and genu of the internal capsule", "Occipital lobe infarct"],
  ans: 2,
  exp: "A <b>pure upper-motor hemiparesis</b> (no cortical signs like aphasia or neglect) suggests a deep infarct of the <b>lenticulostriate branches</b>, which damages the basal ganglia and internal capsule. Right-sided weakness means the <b>left</b> side of the brain.",
  why: ["Superficial (cortical) left MCA strokes usually add aphasia or sensory loss.", "This would cause left-sided weakness plus cortical signs.", null, "Right-sided lesions cause LEFT-sided weakness.", "Occipital lesions affect vision, not motor function."]
},
{
  id: "P-St5", src: "practice", topic: "stroke",
  q: "A stroke survivor speaks fluently with normal rhythm, but their sentences don't make sense, and they have trouble understanding what others say and reading. This is most consistent with:",
  opts: ["Broca's (non-fluent, expressive) aphasia", "Wernicke's (fluent, receptive) aphasia", "Anomic aphasia", "Apraxia", "Cognitive impairment, since aphasia always indicates reduced intelligence"],
  ans: 1,
  exp: "<b>Wernicke's aphasia</b> (fluent/receptive) features impaired reading and writing, inability to grasp the meaning of words, and inability to produce coherent sentences, even though speech flows. Wernicke identified the rear temporal lobe as responsible for receptive speech.",
  why: ["Broca's is non-fluent (short effortful sentences) with preserved comprehension.", null, "Anomic aphasia is mainly word-finding difficulty with vague expressions; comprehension is relatively spared.", "Apraxia is a motor planning disorder, not a language disorder.", "The lecture stresses that aphasia does NOT mean cognitive impairment."]
},
{
  id: "P-St6", src: "practice", topic: "stroke",
  q: "A patient understands speech well and speaks fluently, but often can't find specific words, filling their speech with vague expressions like 'that thing' and 'you know, the stuff'. Writing shows the same problem. Which aphasia is this?",
  opts: ["Broca's aphasia", "Wernicke's aphasia", "Anomic aphasia", "Agnosia", "Prosopagnosia"],
  ans: 2,
  exp: "<b>Anomic aphasia</b>: difficulty finding words for speaking and writing, with speech full of vague expressions. Broca's, Wernicke's and anomic are the most common aphasias after stroke.",
  why: ["Broca's is non-fluent with reduced output and short sentences.", "Wernicke's involves poor comprehension and incoherent sentences.", null, "Agnosia is loss of the ability to recognize objects, persons, sounds, shapes or smells.", "Prosopagnosia is inability to recognize faces."]
},
{
  id: "P-St7", src: "practice", topic: "stroke",
  q: "A patient has normal strength, sensation and coordination, understands the request, and wants to comply. Yet when asked to show how to use a toothbrush, they cannot perform the movement. This is best described as:",
  opts: ["Agnosia", "Apraxia", "Agraphia", "Hemineglect", "Hemiparesis"],
  ans: 1,
  exp: "<b>Apraxia</b> is the inability to execute learned purposeful movements <b>despite having the desire and the physical capacity</b>. It's an acquired disorder of motor planning, not caused by incoordination, sensory loss or failure to comprehend, and it most often comes from a <b>left</b> frontal/parietal lesion.",
  why: ["Agnosia is failure to RECOGNIZE objects, persons, sounds, shapes or smells.", null, "Agraphia is inability to communicate through writing.", "Hemineglect is inattention to one side of space.", "Hemiparesis is one-sided weakness; strength is normal here."]
},
{
  id: "P-St8", src: "practice", topic: "stroke",
  q: "A person can describe a visitor's eyes, nose and mouth in detail but cannot recognize that the visitor is their own sister until she speaks. This deficit and its typical lesion site are:",
  opts: ["Prosopagnosia; fusiform gyrus", "Agnosia; primary motor cortex", "Apraxia; left parietal lobe", "Hemineglect; right parietal lobe", "Wernicke's aphasia; left temporal lobe"],
  ans: 0,
  exp: "<b>Prosopagnosia</b> is the inability to recognize faces, even though specific facial features can be recognized. It is due to a lesion in the <b>fusiform gyrus</b>.",
  why: [null, "Agnosia is a broader recognition deficit, typically near the occipitotemporal border, and the primary motor cortex isn't involved.", "Apraxia is a movement planning deficit.", "Neglect would affect one side of space, not face identity.", "Wernicke's is a language comprehension deficit."]
},
{
  id: "P-St9", src: "practice", topic: "stroke",
  q: "Select the option that correctly fills in the blanks.<br><br>_______ is the idea that the brain is made of specific areas or 'modules' with specific functions. _______ is the idea that certain neural and cognitive processes are specific to one hemisphere. The hemispheres are connected by the _______.",
  opts: ["Lateralization; Localization; internal capsule", "Localization; Lateralization; corpus callosum", "Localization; Lateralization; medial longitudinal fissure", "Lateralization; Localization; corpus callosum", "Localization; Plasticity; anterior horn"],
  ans: 1,
  exp: "<b>Localization</b> = specific areas/modules with specific functions (e.g., Broca's and Wernicke's areas). <b>Lateralization</b> = processes specific to the left or right hemisphere. The hemispheres are divided at the medial longitudinal fissure and <b>connected by the corpus callosum</b>.",
  why: ["The first two terms are swapped, and the internal capsule carries projection fibers, not hemisphere connections.", null, "The medial longitudinal fissure DIVIDES the hemispheres; the corpus callosum CONNECTS them.", "The first two terms are swapped.", "Plasticity isn't the term for hemisphere specialization, and the anterior horn is in the spinal cord."]
},
{
  id: "P-St10", src: "practice", topic: "stroke",
  q: "Why might a surgeon perform a corpus callosotomy ('split brain' surgery)?",
  opts: ["To treat spasticity in the legs", "To interrupt the spread of seizures from one hemisphere to the other in severe epilepsy", "To relieve hemineglect after stroke", "To restore language after Broca's aphasia", "To remove a blood clot in the MCA"],
  ans: 1,
  exp: "The corpus callosum helps the hemispheres share information but also helps <b>seizure impulses spread</b> between them. Cutting it (corpus callosotomy) interrupts that spread in severe epilepsy, producing the classic 'split-brain' experimental findings.",
  why: ["Spasticity is managed with stretching/therapy, Botox and medications.", null, "Neglect is not treated by cutting the corpus callosum.", "This surgery doesn't restore language.", "That would be a vascular procedure, not a corpus callosotomy."]
},
{
  id: "P-St11", src: "practice", topic: "stroke",
  q: "A therapist moves a stroke survivor's elbow slowly and feels mild resistance. When they move it quickly, the resistance increases sharply. The stroke survivor reports it can be painful. This finding is best called:",
  opts: ["Hypertonia", "Spasticity", "Hemineglect", "Flaccid paralysis", "Ataxia"],
  ans: 1,
  exp: "<b>Spasticity</b> is resistance to movement that is <b>velocity dependent</b> (more resistance at higher speed) and can be painful. <b>Hypertonia</b> is resistance that is NOT velocity dependent.",
  why: ["Hypertonia's resistance does not change much with speed.", null, "Neglect is an attention deficit, not a tone abnormality.", "Flaccid means floppy, with reduced tone, the opposite of this.", "Ataxia is a coordination problem (e.g., cerebellar damage)."]
},
{
  id: "P-St12", src: "practice", topic: "stroke",
  q: "Which of the following is a common <b>lower limb</b> impairment after stroke discussed in lecture?",
  opts: ["Foot drop and compensatory walking patterns", "Loss of diaphragm function", "Autonomic dysreflexia", "Crossed-extensor reflex loss", "Prosopagnosia"],
  ans: 0,
  exp: "Lower limb impairments after stroke include gait dysfunction (reduced mobility, high energy expenditure), <b>foot drop</b>, stability problems and <b>compensatory walking patterns</b>.",
  why: [null, "Diaphragm loss is associated with high cervical (C4 and above) spinal cord injury.", "Autonomic dysreflexia is a spinal cord injury complication (injuries above T6).", "Not discussed as a stroke impairment.", "This is a face-recognition deficit, not a lower-limb impairment."]
},
{
  id: "P-St13", src: "practice", topic: "stroke",
  q: "A student wants to read a paper that evaluates and summarizes the existing scientific literature on brain-computer interfaces, to get oriented early in a project. Which type of peer-reviewed publication should they look for?",
  opts: ["Research article", "Review article", "Perspectives article", "Conference paper", "Wikipedia article"],
  ans: 1,
  exp: "<b>Review articles</b> evaluate the scientific literature and work done on a specific topic, and are very helpful early in projects.",
  why: ["Research articles report a single study and its results.", null, "Perspectives articles give expert opinions on a topic or trend.", "Conference papers are smaller-scope publications presented at conferences.", "Wikipedia is not peer reviewed and isn't appropriate for scientific publications."]
},

/* ===================== SPINAL CORD & SCI ===================== */
{
  id: "P-Sc1", src: "practice", topic: "spinal",
  q: "Select the option that correctly fills in the blanks.<br><br>White matter is characterized by the presence of _______ and mostly _______ information, while gray matter is mostly _______ and mostly _______ information.",
  opts: ["cell bodies; processes; myelinated axons; transmits", "myelinated axons; transmits; cell bodies; processes", "myelinated axons; processes; cell bodies; transmits", "dendrites; transmits; glial cells; stores", "cell bodies; transmits; myelinated axons; processes"],
  ans: 1,
  exp: "<b>White matter</b> = myelinated axons (myelin is 'electrical insulation' that increases conduction rate), so it <b>transmits</b>. <b>Gray matter</b> = mostly cell bodies with few myelinated axons, so it <b>processes</b>. Lecture slogan: 'Gray matter processes, white matter transmits.'",
  why: ["The two tissues are swapped.", null, "The functions are swapped.", "Not the lecture's definitions.", "White matter is myelinated axons, not cell bodies."]
},
{
  id: "P-Sc2", src: "practice", topic: "spinal",
  q: "In Rexed's laminae of spinal cord gray matter, where are the <b>motor neurons</b> located?",
  opts: ["Laminae I–VI (dorsal horn)", "Lamina VII", "Lamina VIII", "Lamina IX", "Lamina X"],
  ans: 3,
  exp: "<b>Lamina IX</b> contains the motor neurons. Laminae I–VI form the dorsal horn (sensory/pain), VII and X are the intermediate zone, and VIII contains motor interneurons. Moving from dorsal to ventral goes from 'more sensory' to 'more motor'.",
  why: ["The dorsal horn is sensory/pain.", "Lamina VII is the intermediate zone.", "Lamina VIII contains motor INTERneurons.", null, "Lamina X is part of the intermediate zone (around the central canal)."]
},
{
  id: "P-Sc3", src: "practice", topic: "spinal",
  q: "The cell bodies of sensory afferent neurons are located in the:",
  opts: ["Ventral horn", "Dorsal root ganglion", "Lamina IX", "Thalamus", "Pia mater"],
  ans: 1,
  exp: "The <b>dorsal root ganglion</b> is where the cell bodies of the sensory afferent neurons are located.",
  why: ["The ventral horn contains motor neurons.", null, "Lamina IX contains motor neurons.", "The thalamus is a relay station in the brain for ascending sensory pathways, not where peripheral sensory cell bodies live.", "The pia mater is a meningeal layer."]
},
{
  id: "P-Sc4", src: "practice", topic: "spinal",
  q: "Which spinal meningeal layer contains the cerebrospinal fluid?",
  opts: ["Pia mater", "Arachnoid", "Dura mater", "Epineurium", "Perineurium"],
  ans: 1,
  exp: "The <b>arachnoid</b> contains CSF. The <b>pia mater</b> is highly vascular, helps create the blood-brain barrier and helps produce CSF. The <b>dura mater</b> supports veins and provides general protection.",
  why: ["The pia helps PRODUCE CSF and is highly vascular, but the arachnoid contains it.", null, "The dura supports veins and gives general protection.", "Epineurium is connective tissue around a peripheral nerve, not a meningeal layer.", "Perineurium wraps nerve fascicles in a peripheral nerve."]
},
{
  id: "P-Sc5", src: "practice", topic: "spinal",
  q: "In adult humans, the spinal cord itself ends at approximately which vertebral level?",
  opts: ["C7", "T6", "L1–L2", "S1", "The coccyx"],
  ans: 2,
  exp: "The cord ends around <b>L1–L2</b> (this is not the same in all animals). Below this, the nerve roots continue as the cauda equina.",
  why: ["Far too high: the cord continues through the thoracic region.", "Too high.", null, "The cord ends above this; only nerve roots continue lower.", "Only nerve roots and filum reach this far."]
},
{
  id: "P-Sc6", src: "practice", topic: "spinal",
  q: "A patient was stabbed in the back and has an injury to the <b>left half</b> of the spinal cord at T10. Which pattern of findings would you expect below the injury?",
  opts: ["Left leg: weakness and loss of touch/vibration/proprioception. Right leg: loss of pain and temperature.", "Left leg: loss of pain and temperature. Right leg: weakness and loss of touch/vibration.", "Both legs: complete loss of all sensation and movement", "Both legs: loss of pain and temperature only", "Arms: weakness greater than legs"],
  ans: 0,
  exp: "This is <b>Brown-Séquard syndrome</b> (hemisection). Motor fibers (lateral corticospinal, which crossed above in the medulla) and the dorsal columns (touch, vibration, proprioception, which don't cross until they reach the medulla) both run on the <b>same side</b> as the leg they serve at T10, so these functions are lost on the <b>same side</b> as the injury. Pain and temperature fibers cross <b>at the spinal level</b> within a segment or two, so they are lost on the <b>opposite side</b>.",
  why: [null, "This is the pattern for a RIGHT hemisection.", "That describes a complete injury (ASIA A), not a hemisection.", "Pain/temp loss would be only on the opposite side, plus same-side motor and touch loss.", "That's central cord syndrome, and a T10 injury wouldn't affect the arms."]
},
{
  id: "P-Sc7", src: "practice", topic: "spinal",
  q: "An older adult falls forward and hyperextends their neck. They now have marked weakness in both arms and hands, but can still move their legs fairly well. Which incomplete spinal cord syndrome fits best?",
  opts: ["Anterior cord syndrome", "Central cord syndrome", "Posterior cord syndrome", "Brown-Séquard syndrome", "Cauda equina syndrome"],
  ans: 1,
  exp: "<b>Central cord syndrome</b> results from damage to the center of the cord, causing <b>loss of function in the arms while some leg movement is preserved</b>. Some recovery is usually possible.",
  why: ["Anterior cord syndrome impairs movement broadly while sensation is retained (per lecture), not arms more than legs.", null, "Posterior cord syndrome preserves muscle power but causes poor coordination.", "Brown-Séquard affects one side (motor) vs the other side (pain/temp).", "Cauda equina affects nerve roots below L1-L2, causing lower body and sacral deficits, not arms."]
},
{
  id: "P-Sc8", src: "practice", topic: "spinal",
  q: "A patient with an incomplete SCI has good muscle strength and intact pain and temperature sensation, but they are very poorly coordinated. Which syndrome is most consistent?",
  opts: ["Anterior cord syndrome", "Central cord syndrome", "Posterior cord syndrome", "Brown-Séquard syndrome", "Complete (ASIA A) injury"],
  ans: 2,
  exp: "<b>Posterior cord syndrome</b>: damage to the back of the cord (dorsal columns, which carry proprioception). Survivors keep good muscle power, pain and temperature sensation, but have <b>poor coordination</b>, because they've lost the position sense they need for coordination.",
  why: ["Anterior cord damage impairs movement.", "Central cord damage weakens the arms more than the legs.", null, "Brown-Séquard produces one-sided motor loss and opposite-side pain/temp loss.", "ASIA A means no motor or sensory function below the injury."]
},
{
  id: "P-Sc9", src: "practice", topic: "spinal",
  q: "Per the course slides, which incomplete SCI type involves damage to the front of the spinal cord, causing impaired movement while touch, pain and temperature sensation are retained below the injury?",
  opts: ["Anterior cord syndrome", "Central cord syndrome", "Posterior cord syndrome", "Brown-Séquard syndrome", "Cauda equina syndrome"],
  ans: 0,
  exp: "As described in lecture, <b>anterior cord syndrome</b> involves damage to the front of the cord, impairing movement (the motor pathways in the ventral cord) while retaining sensation. In most cases some movement can later be recovered. (Heads-up: many clinical textbooks say pain and temperature are LOST in anterior cord syndrome because the spinothalamic tract is anterior. For this exam, go with the course slide, and ask your professor if you're unsure.)",
  why: [null, "Central cord: arms affected more than legs.", "Posterior cord: strength preserved, coordination poor.", "Brown-Séquard: one side of the cord damaged.", "Cauda equina: nerve roots below L1-L2."]
},
{
  id: "P-Sc10", src: "practice", topic: "spinal",
  q: "Which incomplete injury type involves nerves rather than the cord itself, and in some cases shows nerve regeneration with recovered function?",
  opts: ["Central cord syndrome", "Anterior cord syndrome", "Cauda equina syndrome", "Brown-Séquard syndrome", "Posterior cord syndrome"],
  ans: 2,
  exp: "<b>Cauda equina syndrome</b> is injury to the nerves located between the first and second lumbar region (below where the cord ends), causing partial or complete loss of sensation. Because these are nerves rather than cord gray matter, in some cases they <b>regenerate</b> and function is recovered. (Gray matter in the cord itself does not regrow or heal well.)",
  why: ["Central cord damage is in the cord itself.", "Anterior cord damage is in the cord itself.", null, "Brown-Séquard is a hemisection of the cord itself.", "Posterior cord damage is in the cord itself."]
},
{
  id: "P-Sc11", src: "practice", topic: "spinal",
  q: "On ASIA examination, a patient has preserved sensation below the level of injury, including in sacral segments S4–S5, but <b>no motor function</b> below the level of injury. Their ASIA grade is:",
  opts: ["ASIA A", "ASIA B", "ASIA C", "ASIA D", "ASIA E"],
  ans: 1,
  exp: "<b>ASIA B</b> (incomplete): sensory but no motor function preserved below the level of injury, including sacral segments.",
  why: ["ASIA A is complete: NO motor or sensory function, including in S4-S5.", null, "ASIA C requires some motor function below the injury (most key muscles < 3/5).", "ASIA D requires motor function with most key muscles ≥ 3/5.", "ASIA E is normal motor and sensory function."]
},
{
  id: "P-Sc12", src: "practice", topic: "spinal",
  q: "A patient with an incomplete SCI has motor function below the level of injury. Of the key muscles below the injury, most can move against gravity (grade 3/5 or higher). What is their ASIA grade?",
  opts: ["ASIA A", "ASIA B", "ASIA C", "ASIA D", "ASIA E"],
  ans: 3,
  exp: "<b>ASIA D</b>: incomplete, motor function preserved below the injury, and the <b>majority of key muscles have a grade ≥ 3/5</b>. If most were < 3/5, it would be ASIA C. ASIA motor grades run from 0 (absent) to 5 (normal) and sensory grades from 0 (absent) to 2 (normal).",
  why: ["ASIA A is complete with no function.", "ASIA B has sensory but NO motor function.", "ASIA C has motor function but most key muscles are < 3/5.", null, "ASIA E is completely normal motor and sensory function."]
},
{
  id: "P-Sc13", src: "practice", topic: "spinal",
  q: "Weeks after a T2 spinal cord injury, a patient suddenly develops a pounding headache, sweating and flushing above the level of injury, very high blood pressure and a low heart rate. This is most likely:",
  opts: ["Spinal shock", "Neurogenic shock", "Autonomic dysreflexia (hyperreflexia)", "Deep vein thrombosis", "Heterotopic ossification"],
  ans: 2,
  exp: "<b>Autonomic dysreflexia</b> is a high risk with injuries <b>above T6</b> and appears after the spinal shock phase. Symptoms include high blood pressure, low heart rate, severe headache, sweating above the injury and nasal stuffiness. It increases the risk of stroke, heart attack or seizures.",
  why: ["Spinal shock is a temporary LOSS of reflexes below the injury in the first days to weeks.", "Neurogenic shock involves LOW heart rate and LOW blood pressure.", null, "DVT is a blood clot in the legs or arms.", "Heterotopic ossification is calcium deposits in muscles, joints or tendons from lack of motion."]
},
{
  id: "P-Sc14", src: "practice", topic: "spinal",
  q: "Immediately after a spinal cord injury, the patient has no reflexes at all below the level of injury. Over days to weeks the reflexes return and spasticity develops. The initial phase is called:",
  opts: ["Spinal shock", "Neurogenic shock", "Autonomic dysreflexia", "Secondary injury", "Ataxia"],
  ans: 0,
  exp: "<b>Spinal shock</b> is a temporary loss of all spinal cord reflexes below the injury, lasting days to weeks. When it ends, spasticity or stiffness starts. It cannot be prevented and must resolve on its own. It also makes early prognosis difficult.",
  why: [null, "Neurogenic shock is low heart rate and low blood pressure.", "Autonomic dysreflexia appears AFTER spinal shock (high BP, low HR).", "Secondary injury refers to the cellular cascade (inflammation, glial scar, cysts).", "Ataxia is uncoordinated movement, e.g., from cerebellar damage."]
},
{
  id: "P-Sc15", src: "practice", topic: "spinal",
  q: "A patient has a complete spinal cord injury at T9. Which breathing-related muscle group is most likely impaired, while the diaphragm continues to work?",
  opts: ["Diaphragm", "Abdominal muscles (important for coughing)", "All respiratory muscles, requiring permanent ventilation", "Neck muscles only", "None; breathing is unaffected at any thoracic level"],
  ans: 1,
  exp: "The three breathing muscle groups are the <b>diaphragm</b> (affected with C4 injuries or higher), <b>intercostals</b> (T1–T11) and <b>abdominals</b> (T7–T12). A T9 injury spares the diaphragm and upper intercostals but impairs the <b>abdominal muscles</b> (and lower intercostals), weakening coughing.",
  why: ["The diaphragm is affected at C4 or higher.", null, "Ventilators are usually needed with cervical injuries, not T9.", "Neck muscles are cervical.", "The abdominals (T7-T12) and lower intercostals are affected."]
},
{
  id: "P-Sc16", src: "practice", topic: "spinal",
  q: "A patient with a cervical SCI can flex their elbows and extend their wrists, but cannot flex their wrists or extend their fingers. Based on the myotome table, the lowest fully working nerve root is most likely:",
  opts: ["C4", "C6", "C7", "C8", "T1"],
  ans: 1,
  exp: "Myotomes from lecture: <b>C5</b> elbow flexion, <b>C6</b> wrist extension, <b>C7</b> wrist flexion and finger extension, <b>C8</b> finger flexion, <b>T1</b> finger abduction. Elbow flexion (C5) and wrist extension (C6) work, but C7 functions do not, so C6 is the lowest intact level.",
  why: ["If C4 were the lowest level, elbow flexion (C5) would be lost too.", null, "C7 would allow wrist flexion and finger extension.", "C8 would allow wrist flexion, finger extension and finger flexion.", "T1 would add finger abduction; all hand functions would be present."]
},
{
  id: "P-Sc17", src: "practice", topic: "spinal",
  q: "Which nerve root level is associated with the <b>quadriceps (patellar) tendon reflex</b>?",
  opts: ["C5", "C7", "T6", "L3–L4", "S4–S5"],
  ans: 3,
  exp: "From the tendon reflex table: C5 biceps, C6 brachioradialis, C7 triceps, <b>L3–L4 quadriceps</b>. L3–L4 is also the myotome for knee extension.",
  why: ["C5 is the biceps reflex.", "C7 is the triceps reflex.", "T6 isn't a standard tendon reflex level.", null, "S4-S5 are the sacral segments tested to determine complete vs incomplete injury."]
},
{
  id: "P-Sc18", src: "practice", topic: "spinal",
  q: "Which of the following is part of the <b>secondary</b> injury after spinal cord trauma, rather than the primary injury?",
  opts: ["The force applied to the spinal cord", "Initial loss of neurons and axons at impact", "Initial demyelination at impact", "Inflammation, reactive oxidative damage and formation of the astrocytic glial scar", "Vertebral fracture at the moment of impact"],
  ans: 3,
  exp: "<b>Primary injury</b>: the applied force, initial loss of neurons/axons, initial demyelination. <b>Secondary injury</b>: further loss of neurons/axons, myelin degradation, <b>inflammation</b> (infiltrating lymphocytes and monocytes), <b>reactive oxidative damage and the astrocytic glial scar</b>, and cyst formation.",
  why: ["Primary injury.", "Primary injury (the INITIAL loss).", "Primary injury (the INITIAL demyelination).", null, "Mechanical damage at impact is part of the primary event."]
},
{
  id: "P-Sc19", src: "practice", topic: "spinal",
  q: "Why are thoracic spinal cord injuries (T1–T12) less common than cervical injuries?",
  opts: ["The thoracic cord has no white matter", "The rib cage provides protection", "The thoracic cord ends at T6", "Thoracic nerves regenerate quickly", "Thoracic injuries are always classified as cauda equina"],
  ans: 1,
  exp: "Thoracic injuries are <b>less common because of the protection given by the rib cage</b>. When they occur they cause paralysis/weakness of the legs (paraplegia), trunk and stability issues, and bowel/bladder/sexual dysfunction, usually sparing the arms and hands. About 55% of SCIs are cervical.",
  why: ["All levels of the cord have white matter.", null, "The cord ends at L1-L2.", "Gray matter in the cord does not regrow or heal well.", "Cauda equina refers to nerve roots below L1-L2."]
},
{
  id: "P-Sc20", src: "practice", topic: "spinal",
  q: "Select the option that correctly fills in the blanks.<br><br>_______ information is sensory input coming into the spinal cord and usually up to the brain. _______ information is motor output coming from the brain and spinal cord out to the periphery.",
  opts: ["Efferent; Afferent", "Afferent; Efferent", "Exafferent; Reafferent", "Ascending; Afferent", "Efferent; Descending"],
  ans: 1,
  exp: "<b>Afferent</b> = sensory input traveling <b>toward</b> the spinal cord/brain, carried by sensory neurons. <b>Efferent</b> = motor output traveling <b>out</b> to the periphery, carried by motor neurons. (Memory trick: Afferent Arrives, Efferent Exits.)",
  why: ["The terms are swapped.", null, "Exafference and reafference describe where sensory input comes from (external vs self-generated), not direction in the cord.", "Afferent can't describe motor output.", "Efferent can't describe sensory input."]
},
{
  id: "P-Sc21", src: "practice", topic: "spinal",
  q: "Which technology applies continuous electrical current at varying frequencies and intensities to a specific location on the <b>lumbosacral</b> part of the spinal cord to help people with SCI?",
  opts: ["Deep brain stimulation", "Epidural spinal stimulation", "Robotic exoskeleton", "Transcranial magnetic stimulation", "Botox injection"],
  ans: 1,
  exp: "<b>Epidural spinal stimulation</b> applies continuous electrical current, at varying frequencies and intensities, to specific locations on the lumbosacral spinal cord. This relates to the idea of activating the spinal locomotor CPG with electrical stimulation.",
  why: ["DBS stimulates deep brain structures, not the spinal cord.", null, "Exoskeletons provide powered hip and knee motion; they don't stimulate the cord.", "TMS stimulates the cortex through the skull.", "Botox treats spasticity and hypertonia."]
},

/* ===================== SPINAL TRACTS, MOTOR UNITS & REFLEXES ===================== */
{
  id: "P-T1", src: "practice", topic: "tracts",
  q: "Approximately what percentage of corticospinal fibers cross at the medullary pyramids to form the <b>lateral</b> corticospinal tract?",
  opts: ["2%", "8%", "50%", "90%", "100%"],
  ans: 3,
  exp: "About <b>90%</b> of corticospinal fibers cross (decussate) at the medullary pyramids into the lateral corticospinal tract. About 8% stay uncrossed in the anterior (direct) corticospinal tract, and about 2% descend uncrossed in the lateral tract. That's why each hemisphere controls the <b>opposite</b> side of the body.",
  why: ["~2% descend uncrossed in the lateral tract.", "~8% form the uncrossed anterior corticospinal tract.", "Far more than half cross.", null, "A small fraction stays uncrossed."]
},
{
  id: "P-T2", src: "practice", topic: "tracts",
  q: "Which of the following descending tracts is <b>NOT</b> considered an extrapyramidal tract for unconscious, automatic movements?",
  opts: ["Rubrospinal tract", "Reticulospinal tract", "Vestibulospinal tract", "Lateral corticospinal tract", "All of the above are extrapyramidal"],
  ans: 3,
  exp: "The <b>corticospinal tracts</b> are the <b>pyramidal</b> tracts carrying voluntary motor commands from cortex to spinal motor neurons. The <b>extrapyramidal</b> tracts are the rubrospinal (from the red nucleus in the midbrain), reticulospinal and vestibulospinal tracts (from the brainstem).",
  why: ["Extrapyramidal: from the red nucleus in the midbrain.", "Extrapyramidal: from the brainstem.", "Extrapyramidal: from the brainstem.", null, "The lateral corticospinal tract is pyramidal, so not all are extrapyramidal."]
},
{
  id: "P-T3", src: "practice", topic: "tracts",
  q: "After an injury to the corticospinal tracts, which outcome is most typical?",
  opts: ["Fine and coarse movements recover equally", "Some coarse movements may be recovered, but fine movements are lost", "Fine movements recover but coarse movements are lost", "Only sensory function is lost", "Only the same (ipsilateral) side of the body is affected above the decussation"],
  ans: 1,
  exp: "The corticospinal tracts are very important for <b>fine motor control</b>. After injury, some <b>coarse</b> movements may be recovered, but <b>fine</b> movements are lost.",
  why: ["Fine control depends heavily on corticospinal tracts.", null, "The opposite is true.", "Corticospinal tracts are motor.", "Above the decussation, a lesion affects the OPPOSITE side of the body."]
},
{
  id: "P-T4", src: "practice", topic: "tracts",
  q: "Which statement about motor neurons and muscle fibers is correct?",
  opts: ["Each muscle fiber is innervated by several motor neurons", "Each muscle fiber is innervated by only one motor neuron, but one motor neuron may innervate several muscle fibers", "Each motor neuron innervates exactly one muscle fiber", "A motor pool consists of one motor neuron and all the fibers it innervates", "Motor neurons for one muscle are scattered randomly in the spinal cord"],
  ans: 1,
  exp: "<b>Each muscle fiber is innervated by only one motor neuron</b>, but one motor neuron may innervate many muscle fibers. A motor neuron plus its fibers is a <b>motor unit</b>; all motor neurons for one muscle form a <b>pool</b>, organized by the muscle they innervate.",
  why: ["One fiber, one motor neuron.", null, "A motor neuron can innervate many fibers.", "That's the definition of a motor UNIT.", "Pools are organized by the muscle they innervate."]
},
{
  id: "P-T5", src: "practice", topic: "tracts",
  q: "In neuronal pool organization, which circuit type brings multiple types of information from multiple sources onto a <b>single</b> neuron?",
  opts: ["Divergence (spreading stimulation)", "Convergence", "Serial processing", "Parallel processing", "Reverberation (positive feedback)"],
  ans: 1,
  exp: "<b>Convergence</b> brings multiple types of information and effects onto a single neuron from multiple sources.",
  why: ["Divergence spreads stimulation from one neuron to many, allowing rapid spread of information.", null, "Serial processing is sequential processing within a group of neurons.", "Parallel processing handles the same information simultaneously in multiple neurons or pools.", "Reverberation is positive feedback of postsynaptic neurons onto presynaptic neurons."]
},
{
  id: "P-T6", src: "practice", topic: "tracts",
  q: "When a clinician taps the patellar tendon, the quadriceps contracts (knee jerk) and the hamstrings relax. Which statement correctly describes the pathways?",
  opts: ["Both responses are monosynaptic", "Quadriceps contraction is monosynaptic; hamstring relaxation is disynaptic via an inhibitory interneuron", "Quadriceps contraction is disynaptic; hamstring relaxation is monosynaptic", "Both require a descending command from the motor cortex", "Both are mediated by Golgi tendon organs"],
  ans: 1,
  exp: "The Ia afferent from the quadriceps spindle synapses <b>directly</b> on the quadriceps α motor neuron: a <b>monosynaptic</b> pathway (1 synapse). To relax the antagonist hamstrings (reciprocal inhibition), the signal goes through an <b>inhibitory interneuron</b>: a <b>disynaptic</b> pathway (2 synapses).",
  why: ["Reciprocal inhibition requires an interneuron, so it has 2 synapses.", null, "This is reversed.", "This is a spinal reflex; no cortical command needed.", "The tendon tap stretches the muscle, activating muscle spindles."]
},
{
  id: "P-T7", src: "practice", topic: "tracts",
  q: "Which statement about muscle spindle afferents is correct?",
  opts: ["Type II afferents mainly report the rate of change of muscle length", "Ia afferents report both muscle length and its rate of change (dynamic and static), and are especially responsive to rapid stretch", "Ia afferents report muscle force", "Type II afferents carry motor commands to intrafusal fibers", "Muscle spindles are located in tendons"],
  ans: 1,
  exp: "<b>Ia (primary ending)</b>: both dynamic and static responses (velocity and length), especially responsive to rapid stretch. <b>Type II (secondary ending)</b>: mainly sustained/static muscle length.",
  why: ["Type II mainly reports static length, not velocity.", null, "Force is sensed by Golgi tendon organs.", "Type II afferents are sensory; gamma motor neurons go to intrafusal fibers.", "Spindles are embedded between muscle fibers; GTOs are in tendons."]
},
{
  id: "P-T8", src: "practice", topic: "tracts",
  q: "During a voluntary contraction the muscle shortens, which would make the muscle spindle go slack and lose sensitivity. What prevents this?",
  opts: ["Ia afferents stop firing", "Gamma (γ) motor neurons contract the ends of the intrafusal fibers, keeping the central sensory region taut", "Alpha (α) motor neurons contract the intrafusal fibers", "Golgi tendon organs stretch the spindle", "The dorsal root ganglion adjusts spindle length"],
  ans: 1,
  exp: "<b>Gamma motor neurons</b> go from the spinal cord to the <b>intrafusal</b> fibers. They contract the spindle's ends, keeping the central sensory region taut and adjusting its sensitivity ('resetting the gain'). <b>Alpha</b> motor neurons contract the main <b>extrafusal</b> fibers.",
  why: ["Losing Ia firing is the problem, not the solution.", null, "Alpha motor neurons innervate extrafusal fibers.", "GTOs sense force; they don't adjust spindles.", "The DRG contains sensory cell bodies; it doesn't adjust spindles."]
},
{
  id: "P-T9", src: "practice", topic: "tracts",
  q: "A ~90 Hz, 0.5 mm amplitude vibration applied over a blindfolded participant's biceps tendon makes them feel their elbow is moving even though it is still. What explains this illusion?",
  opts: ["The vibration activates Golgi tendon organs, which signal movement", "The vibration activates muscle spindles, and the brain assumes the limb must be moving", "The vibration directly stimulates the motor cortex", "The vibration blocks Pacinian corpuscles", "The vibration produces an H-reflex"],
  ans: 1,
  exp: "Vibration at ~90 Hz activates the <b>muscle spindles</b>, which normally signal stretch. The brain interprets this as the muscle lengthening and concludes the limb must be moving. <b>Vision overrides</b> the illusion, which is why the participant is blindfolded.",
  why: ["GTOs sense force, not length/movement.", null, "The stimulus is peripheral.", "Pacinian corpuscles are skin vibration receptors; they're not the source of the movement illusion.", "An H-reflex is evoked by electrical nerve stimulation and recorded with EMG."]
},
{
  id: "P-T10", src: "practice", topic: "tracts",
  q: "When a peripheral nerve is stimulated electrically and EMG is recorded from the muscle, two responses appear. Which statement is correct?",
  opts: ["The H-reflex appears first because sensory fibers are faster", "The M-wave appears first because stimulation directly activates motor efferents, the shortest path to the muscle; the H-reflex follows via Ia afferents → spinal cord → α motor neurons", "Both responses travel through the spinal cord", "The M-wave comes from Golgi tendon organs", "The H-reflex requires a command from the motor cortex"],
  ans: 1,
  exp: "Electrical stimulation activates large fibers: Ia afferents and α motor neuron efferents. The <b>M-wave</b> (muscle wave) comes first because the motor axons are activated directly, the shortest distance to the muscle. The <b>H-reflex</b> (Hoffmann reflex) comes later because the signal travels up Ia afferents to the spinal cord, synapses on α motor neurons, and returns to the same muscle.",
  why: ["The H-reflex has a longer path (to the spinal cord and back), so it arrives second.", null, "Only the H-reflex goes through the spinal cord; the M-wave is direct.", "The M-wave comes from directly activated motor efferents.", "It's a spinal reflex loop."]
},
{
  id: "P-T11", src: "practice", topic: "tracts",
  q: "You step on a tack with your right foot. Your right leg withdraws by flexing at the hip, knee and ankle, and about 0.2–0.5 s later your left leg extends to take your weight. These two responses are, respectively:",
  opts: ["Stretch reflex; H-reflex", "Flexor-withdrawal reflex; crossed-extensor reflex", "Crossed-extensor reflex; flexor-withdrawal reflex", "Stumble response; stretch reflex", "Monosynaptic reflex; reciprocal inhibition"],
  ans: 1,
  exp: "The <b>flexor-withdrawal reflex</b> affects muscles at <b>multiple joints</b> by synapsing on motor neurons at different spinal levels. The <b>crossed-extensor reflex</b> sends information across the spinal cord to activate the extensors of the <b>other</b> leg (about 0.2–0.5 s later) to accept body weight and push away from the stimulus.",
  why: ["The stretch reflex responds to muscle stretch; the H-reflex is an electrically evoked lab version of it.", null, "The order is reversed.", "The stumble response happens when the foot hits an obstacle during swing.", "Withdrawal reflexes involve multiple synapses and spinal levels."]
},
{
  id: "P-T12", src: "practice", topic: "tracts",
  q: "Select the option that correctly fills in the blanks.<br><br>_______ is sensing the position of our limbs and body parts. _______ is sensing the movement of our limbs and body parts. Both are informed by _______, which detect length or stretch in our muscles.",
  opts: ["Kinesthesia; proprioception; Golgi tendon organs", "Proprioception; kinesthesia; muscle spindles", "Proprioception; kinesthesia; Pacinian corpuscles", "Stereognosis; proprioception; muscle spindles", "Kinesthesia; stereognosis; Merkel discs"],
  ans: 1,
  exp: "<b>Proprioception</b> = sensing position. <b>Kinesthesia</b> = sensing movement. <b>Muscle spindles</b> detect muscle length/stretch to inform both.",
  why: ["The first two are swapped, and GTOs sense force, not length.", null, "Pacinian corpuscles are skin receptors for high-frequency vibration.", "Stereognosis is recognizing objects by touch.", "Merkel discs are skin receptors for edges and fine spatial detail."]
},
{
  id: "P-T13", src: "practice", topic: "tracts",
  q: "Two reflexes with the same type of receptor are compared. Reflex X is processed in the spinal cord; Reflex Y travels up to the brainstem and cortex before returning. Which statement is most accurate?",
  opts: ["Reflex Y will be faster because the brain is more powerful", "Reflex X will be faster, because reflex timing depends on the distance the signal travels and the number of synapses", "Both reflexes take exactly the same time", "Reflex X requires a descending cortical command", "Neither is a true reflex"],
  ans: 1,
  exp: "Reflex timing depends on the <b>distance the signal travels and the number of synapses</b>. A spinal reflex has a shorter path and fewer synapses than a longer (cortical) reflex, so it is faster.",
  why: ["Longer paths and more synapses make a reflex slower, not faster.", null, "Different path lengths and synapse counts give different latencies.", "Spinal reflexes don't need cortical commands.", "Both are reflexes: fast, automatic responses to stimuli processed at different levels."]
},

/* ===================== SENSORY TRACTS, RECEPTORS & MOTOR CONTROL ===================== */
{
  id: "P-Se1", src: "practice", topic: "sensory",
  q: "Which statement correctly contrasts the dorsal column–medial lemniscal (DCML) pathway with the spinothalamic pathway?",
  opts: ["DCML carries pain and temperature and crosses in the spinal cord", "DCML carries touch, pressure, vibration and proprioception, uses large, heavily myelinated fibers, and crosses in the medulla; spinothalamic carries pain and temperature, uses small, thinly or unmyelinated fibers, and crosses in the spinal cord", "Both cross in the spinal cord within one or two segments", "Spinothalamic fibers are larger and faster than DCML fibers", "Only the DCML pathway relays through the thalamus"],
  ans: 1,
  exp: "Differences: <b>point of decussation</b> (DCML: medulla; spinothalamic: spinal cord), <b>fiber size</b> (large vs small), and <b>myelination/speed</b> (thick vs thin/none). Similarities: <b>both</b> relay in the <b>thalamus</b> and project to S1 (the spinothalamic tract also goes to the insular cortex).",
  why: ["That describes the spinothalamic pathway.", null, "Only the spinothalamic pathway crosses in the cord; DCML crosses in the medulla.", "The opposite is true.", "Both relay through the thalamus."]
},
{
  id: "P-Se2", src: "practice", topic: "sensory",
  q: "In addition to the thalamus and S1, the spinothalamic (pain) pathway also projects to which region associated with perception, fear, emotion and memory?",
  opts: ["Insular cortex", "Cerebellum", "Primary motor cortex", "Occipital lobe", "Red nucleus"],
  ans: 0,
  exp: "The spinothalamic pathway also projects to the <b>insular cortex</b> (perception, fear, emotion, memory), which helps explain the emotional component of pain.",
  why: [null, "The cerebellum receives spinocerebellar input, not this projection.", "Not the target named for the emotional component of pain.", "The occipital lobe processes vision.", "The red nucleus is the origin of the rubrospinal (motor) tract."]
},
{
  id: "P-Se3", src: "practice", topic: "sensory",
  q: "Which peripheral nerve fiber type has the <b>smallest diameter and slowest conduction velocity</b> (~0.4–2 m/s) and carries pain and temperature information?",
  opts: ["Aα / Type I (e.g., Ia from muscle spindles)", "Aβ / Type II", "Aδ / Type III", "C / Type IV (unmyelinated)", "Gamma efferents"],
  ans: 3,
  exp: "<b>C fibers (Type IV)</b> are unmyelinated, ~0.2–1.5 μm in diameter, and conduct at ~0.4–2 m/s. At the other extreme, Aα/Type I fibers (e.g., spindle Ia afferents) are 12–20 μm and conduct at 72–120 m/s.",
  why: ["The largest and fastest fibers (12-20 μm, 72-120 m/s), used for proprioception.", "Medium fibers (6-12 μm, 36-72 m/s), used for touch.", "Small myelinated fibers (1-6 μm, 4-36 m/s): fast pain/temperature, but not the slowest.", null, "Efferents to intrafusal fibers; not the slowest sensory fibers."]
},
{
  id: "P-Se4", src: "practice", topic: "sensory",
  q: "You're holding a glass, and it starts to slip through your fingers. Which rapidly adapting, small-receptive-field (RA I) mechanoreceptor is best suited to detect this?",
  opts: ["Merkel discs", "Meissner corpuscles", "Ruffini endings", "Pacinian corpuscles", "Golgi tendon organs"],
  ans: 1,
  exp: "<b>Meissner corpuscles</b> (rapidly adapting type I) detect light touch moving across the skin, <b>slipping objects</b>, and low-frequency vibration ('flutter').",
  why: ["Merkel discs (SA I) detect sustained touch/pressure, edges and fine spatial detail.", null, "Ruffini endings (SA II) detect sustained skin stretch.", "Pacinian corpuscles (RA II) detect high-frequency vibration and rapid pressure changes.", "GTOs sense muscle force, not skin contact."]
},
{
  id: "P-Se5", src: "practice", topic: "sensory",
  q: "A person reading Braille needs to perceive the edges and fine spatial detail of raised dots. Which slowly adapting type I (SA I) receptor is most responsible?",
  opts: ["Merkel discs", "Meissner corpuscles", "Ruffini endings", "Pacinian corpuscles", "Free nerve endings"],
  ans: 0,
  exp: "<b>Merkel discs</b> (SA I) encode sustained touch and pressure, <b>edges, shapes and fine spatial details</b>. Type I receptors have small receptive fields ('hot spots').",
  why: [null, "Meissner corpuscles are RAPIDLY adapting (RA I), for slip/flutter.", "Ruffini endings (SA II) detect skin stretch and have large receptive fields.", "Pacinian corpuscles (RA II) detect high-frequency vibration.", "Free nerve endings are a 'wild card' for touch and pressure (and pain/temperature), not the fine-spatial-detail receptor."]
},
{
  id: "P-Se6", src: "practice", topic: "sensory",
  q: "Using a power drill, you feel strong high-frequency vibration through your palm. Which receptor (and adaptation type) is most responsible?",
  opts: ["Merkel disc (SA I)", "Meissner corpuscle (RA I)", "Ruffini ending (SA II)", "Pacinian corpuscle (RA II)", "Muscle spindle (Ia)"],
  ans: 3,
  exp: "<b>Pacinian corpuscles</b> are rapidly adapting type II receptors that detect <b>high-frequency vibration</b> and rapid changes in pressure. Type II receptors have large receptive 'zones'.",
  why: ["Merkel discs handle sustained pressure and edges.", "Meissner corpuscles handle LOW-frequency flutter and slip.", "Ruffini endings handle sustained skin stretch.", null, "Muscle spindles sense muscle length, not skin vibration."]
},
{
  id: "P-Se7", src: "practice", topic: "sensory",
  q: "Which receptor is slowly adapting type II (SA II) and detects sustained skin stretch, such as the stretch associated with finger movements?",
  opts: ["Merkel discs", "Meissner corpuscles", "Ruffini endings", "Pacinian corpuscles", "Hair follicle receptors"],
  ans: 2,
  exp: "<b>Ruffini endings</b> (SA II): sustained skin stretch, including stretch associated with finger movements.",
  why: ["Merkel discs are SA I (edges, fine detail).", "Meissner corpuscles are RA I.", null, "Pacinian corpuscles are RA II.", "Hair follicle receptors are rapidly adapting."]
},
{
  id: "P-Se8", src: "practice", topic: "sensory",
  q: "Select the option that correctly fills in the blanks.<br><br>A receptor's 'adaptation' describes how long it keeps firing in response to a _______ stimulus. Type I receptors have _______ receptive fields, and Type II receptors have _______ receptive fields.",
  opts: ["constant; small; large", "changing; large; small", "constant; large; small", "painful; small; large", "visual; small; large"],
  ans: 0,
  exp: "Adaptation = how long a receptor fires before returning to normal with a <b>constant</b> stimulus (slowly adapting keeps firing; rapidly adapting stops quickly). <b>Type I</b>: small receptive fields ('hot spots'). <b>Type II</b>: large 'zone' information.",
  why: [null, "Adaptation is defined with a constant stimulus, and the field sizes are reversed.", "The field sizes are reversed.", "Adaptation isn't specific to painful stimuli.", "These are mechanoreceptors, not visual receptors."]
},
{
  id: "P-Se9", src: "practice", topic: "sensory",
  q: "Which sensory receptor encodes the <b>force</b> in a muscle?",
  opts: ["Muscle spindle", "Golgi tendon organ", "Pacinian corpuscle", "Ruffini ending", "Merkel disc"],
  ans: 1,
  exp: "The <b>Golgi tendon organ</b> senses force in the muscle (it sits in the tendon). The <b>muscle spindle</b> senses length and rate of change of length.",
  why: ["Spindles sense length and velocity.", null, "Pacinian corpuscles sense vibration.", "Ruffini endings sense skin stretch.", "Merkel discs sense sustained touch, edges and shapes."]
},
{
  id: "P-Se10", src: "practice", topic: "sensory",
  q: "Why is it hard to tickle yourself, while someone else can tickle you easily?",
  opts: ["Self-touch produces exafference, which the brain amplifies", "An efference copy of your own motor command predicts the reafferent sensation, so the expected sensation is compared against and cancelled", "Your skin receptors are disabled when you move", "Tickling is carried only by the corticospinal tract", "Other people's touch activates only Golgi tendon organs"],
  ans: 1,
  exp: "When you move, an <b>efference copy</b> of the motor command generates an <b>expectation</b> of the sensory consequences. The resulting <b>reafference</b> (sensation from your own action) is compared with that expectation and largely cancelled. Someone else's touch is <b>exafference</b> (external), so there's no prediction to cancel it.",
  why: ["Self-touch produces REafference, and it's dampened, not amplified.", null, "Receptors still fire; the brain discounts the predicted part.", "The corticospinal tract is a descending motor pathway.", "GTOs sense muscle force."]
},
{
  id: "P-Se11", src: "practice", topic: "sensory",
  q: "You grab a milk carton you believe is full, but it's nearly empty, and your arm jerks upward. In the simplified motor control loop, what best explains this?",
  opts: ["Exafference from the carton caused a stretch reflex", "Your internal model produced an expectation of a heavy load; comparing it with the actual sensation revealed a mismatch, which the system then corrects", "The crossed-extensor reflex was triggered", "Golgi tendon organs failed", "The motor command bypassed the spinal cord"],
  ans: 1,
  exp: "Your <b>internal model</b> (a representation of reality) predicted a full, heavy carton, so your intent generated a large motor command. The <b>efference copy → expectation</b> didn't match the actual <b>sensation</b>, so the <b>compare</b> step flagged an error. This is closed-loop control: feedforward actions adjusted using sensory feedback.",
  why: ["The carton's weight results from your own action (reafference), and the jerk reflects a prediction error, not a stretch reflex.", null, "The crossed-extensor reflex is a leg reflex to painful stimuli.", "GTOs worked fine; the prediction was wrong.", "Motor commands to arm muscles still go through spinal motor neurons."]
},
{
  id: "P-Se12", src: "practice", topic: "sensory",
  q: "In the simplified motor control loop from lecture, which pairing is correct?",
  opts: ["Feedforward = sensory information; Feedback = movement/actions", "Feedforward = movement/actions; Feedback = sensory information", "Feedforward = exafference; Feedback = efference copy", "Feedforward = reflexes only; Feedback = voluntary movement only", "Feedforward and feedback are the same thing"],
  ans: 1,
  exp: "In our bodies, <b>feedforward</b> = movements/actions, and <b>feedback</b> = sensory information. We adapt our actions based on sensory information, especially when our actions are perturbed (e.g., tripping, bumping an object while reaching).",
  why: ["This is reversed.", null, "Not the lecture's mapping.", "Not the lecture's mapping.", "They are distinct parts of a closed loop."]
},
{
  id: "P-Se13", src: "practice", topic: "sensory",
  q: "Which of the following was <b>NOT</b> listed in lecture as one of the sensory systems involved in movement?",
  opts: ["Visual information", "Proprioception/kinesthesia", "Cutaneous sensation", "Vestibular information", "Olfactory information"],
  ans: 4,
  exp: "The sensory systems listed as involved in movement were <b>visual</b>, <b>proprioception/kinesthesia</b>, <b>cutaneous</b> and <b>vestibular</b> information.",
  why: ["Listed.", "Listed.", "Listed.", "Listed.", null]
},
{
  id: "P-Se14", src: "practice", topic: "sensory",
  q: "In the DCML pathway, where do the large-diameter sensory afferents first <b>cross</b> to the opposite side?",
  opts: ["Immediately on entering the spinal cord", "Within one or two spinal segments", "In the medulla", "In the thalamus", "They never cross"],
  ans: 2,
  exp: "DCML afferents enter the <b>ipsilateral</b> dorsal column and ascend <b>without crossing</b> to the medulla. Axons from the medullary relay station <b>cross in the medulla</b>, then synapse in the thalamus, which projects to the somatosensory cortex.",
  why: ["They ascend on the same side first.", "That's the spinothalamic pathway.", null, "They have already crossed before reaching the thalamus.", "They do cross, which is why the cortex perceives touch from the opposite side of the body."]
},

/* ===================== NEURAL CONTROL OF WALKING ===================== */
{
  id: "P-W1", src: "practice", topic: "walking",
  q: "In the early 1900s, Graham Brown found that cats with a complete spinal transection could still produce stepping on a treadmill. This observation provided early evidence for:",
  opts: ["Cortical control of every step", "Central pattern generators (CPGs) in the spinal cord", "The muscle spindle hypothesis of stance-swing transition", "Cerebellar control of walking rhythm", "The Mesencephalic Locomotor Region"],
  ans: 1,
  exp: "Because stepping persisted <b>without any connection to the brain</b>, the rhythm must be generated within the spinal cord: <b>central pattern generators</b>. Brown proposed the 'half-center' model.",
  why: ["The brain was disconnected, so it couldn't be controlling each step.", null, "That's a later afferent-feedback idea (Grillner & Rossignol, 1978).", "The cerebellum was disconnected.", "The MLR is in the brainstem, which was disconnected from the cord."]
},
{
  id: "P-W2", src: "practice", topic: "walking",
  q: "Which of the following is <b>NOT</b> a key feature of the CPG half-center model?",
  opts: ["Each limb is controlled by a separate CPG", "Two excitatory half-centers project to flexor and extensor motor neurons respectively", "Mutual inhibition between half-centers ensures only one is active at a time", "Both half-centers are normally active at the same time to co-contract flexors and extensors", "A 'fatigue' process gradually reduces excitation in the active half-center until the opposite center is released"],
  ans: 3,
  exp: "In the half-center model, <b>mutual inhibition ensures only one half-center is active at a time</b>, and inhibition of antagonists is tightly coupled to excitation of agonists. Simultaneous co-activation contradicts the model.",
  why: ["Key point.", "Key point.", "Key point.", null, "Key point: this is how phase switching happens."]
},
{
  id: "P-W3", src: "practice", topic: "walking",
  q: "Shik et al. (1966) applied <b>tonic</b> (steady) electrical stimulation to the Mesencephalic Locomotor Region (MLR) in decerebrate cats. Which set of findings did they report?",
  opts: ["Tonic stimulation produced tonic co-contraction; stronger stimulation stopped walking", "Tonic stimulation generated phasic, alternating flexor/extensor activity; the rhythm was not set by the stimulation pattern; stronger stimulation produced faster walking", "Walking only occurred if the stimulation pulses were timed to each step", "Stimulation produced goal-directed walking toward targets", "Stimulation suppressed hindlimb postural support"],
  ans: 1,
  exp: "Tonic MLR stimulation generated <b>phasic</b> activation of flexors and extensors. The <b>timing of the rhythm was not governed by the stimulation pattern</b> (consistent with a spinal CPG generating rhythm), and <b>greater stimulation intensity gave faster walking</b>. Imaging suggests an MLR also exists in humans.",
  why: ["Tonic input produced rhythmic (phasic) output, and stronger input meant faster walking.", null, "The rhythm was independent of stimulation timing.", "Goal-directed walking was linked to the Subthalamic Locomotor Region (SLR), not the MLR.", "That was the Dorsal Tegmental Field."]
},
{
  id: "P-W4", src: "practice", topic: "walking",
  q: "Stimulation of which brainstem/diencephalic region causes the initiation of walking in a <b>goal-directed</b> manner (which the MLR does not)?",
  opts: ["Subthalamic Locomotor Region (SLR)", "Dorsal Tegmental Field", "Ventral Tegmental Field", "Lateral Hypothalamic Area", "Cuneate Nucleus"],
  ans: 0,
  exp: "Stimulating the <b>Subthalamic Locomotor Region (SLR)</b> initiates <b>goal-directed</b> walking; the MLR does not.",
  why: [null, "The DTF suppresses hindlimb postural support.", "The VTF has the opposite effect: it builds postural support (lying → squatting → standing → walking).", "The LHA produces slow walking with the head extended, looking around.", "Cuneate nucleus stimulation can induce locomotion, but not specifically goal-directed walking."]
},
{
  id: "P-W5", src: "practice", topic: "walking",
  q: "A patient walks with a wide base and a staggering, 'drunken sailor' gait. Which structure is most likely damaged, and what mechanism was proposed?",
  opts: ["Basal ganglia; gait freezing", "Cerebellum; loss of the phase-dependent modulation of reticulospinal neuron firing", "Motor cortex; scissor gait", "Spinal CPG; loss of the rhythm", "Dorsal columns; loss of pain sensation"],
  ans: 1,
  exp: "This is <b>ataxic gait</b> from <b>cerebellar</b> damage. Reticulospinal neurons normally fire at frequencies modulated by step phase (higher during swing). Removing the cerebellum removed this modulation, suggesting the cerebellum has an excitatory influence and relays afferent information back to brainstem locomotor regions.",
  why: ["Basal ganglia damage (e.g., Parkinson's) causes gait freezing and off-phase gait.", null, "Scissor gait is linked to cerebral palsy (motor cortex damage).", "A CPG loss wouldn't produce this specific coordination pattern.", "Dorsal columns carry touch/proprioception, not pain."]
},
{
  id: "P-W6", src: "practice", topic: "walking",
  q: "Which statement about the basal ganglia and walking is correct?",
  opts: ["The basal ganglia send direct projections to spinal motor neurons", "The basal ganglia have no direct spinal connections but influence locomotion via the cerebrum, brainstem (including the MLR) and cerebellum, and play an important role in initiating walking", "The basal ganglia generate the locomotor rhythm", "Basal ganglia damage causes wide-based ataxic gait", "The basal ganglia are not involved in walking"],
  ans: 1,
  exp: "The basal ganglia have <b>no direct connections to the spinal cord</b>, but they connect to the cerebrum, brainstem and cerebellum (and to the MLR in lower mammals). They play an important role in <b>initiating</b> locomotion and in producing proper extensor force for postural adjustments before push-off. Parkinson's disease (basal ganglia damage) causes gait freezing.",
  why: ["They have no direct spinal connections.", null, "The rhythm is generated by spinal CPGs.", "Ataxic gait is cerebellar.", "They contribute to initiation and posture."]
},
{
  id: "P-W7", src: "practice", topic: "walking",
  q: "A cat is walking when the dorsum (top) of its foot hits an obstacle <b>during swing</b>. What happens, and would the same stimulus during stance produce the same response?",
  opts: ["The leg extends to push off; yes, the same response occurs during stance", "The whole leg flexes to lift the foot over the obstacle, followed by knee extension to step past it; no, this response is not seen if the foot dorsum is touched during stance", "The leg freezes; yes, in both phases", "The opposite leg flexes; no", "Nothing happens because cutaneous input doesn't affect walking"],
  ans: 1,
  exp: "This is the <b>stumble response</b>. Cutaneous receptors on the dorsum of the foot trigger flexion of the whole leg to lift the foot over the obstacle, then knee extension to carry the leg past it. It is <b>phase dependent</b>: it is not seen if the dorsum is touched during stance.",
  why: ["Wrong response, and it's phase-dependent.", null, "Not the described response.", "The response is in the leg that hit the obstacle.", "Cutaneous afferents clearly modulate walking in perturbed situations."]
},
{
  id: "P-W8", src: "practice", topic: "walking",
  q: "Consider the following observations in walking cats:<ol><li>Preventing the hip from extending at the end of stance delays the transition to swing.</li><li>Stretching the hip flexor muscles at the end of stance promotes the transition to swing.</li><li>Loading the ankle extensors at the end of stance delays the transition to swing.</li></ol>Which combination is most consistent with the role of <b>muscle spindle (stretch)</b> feedback in regulating the stance-to-swing transition?",
  opts: ["Observation 1 only", "Observation 3 only", "Observations 1 and 2", "Observations 2 and 3", "Observations 1, 2, and 3"],
  ans: 2,
  exp: "The muscle spindle hypothesis (Grillner & Rossignol, 1978) says that <b>stretch of the hip flexors</b> as the leg extends triggers the switch to swing. Blocking hip extension prevents that stretch and delays swing (1), and stretching the hip flexors promotes it (2). Observation 3 is about <b>load on the ankle extensors</b>, which is the Golgi tendon organ hypothesis.",
  why: ["Correct but incomplete: observation 2 also supports the spindle hypothesis.", "Load on the ankle extensors is GTO evidence.", null, "Observation 3 is GTO (load) evidence.", "Observation 3 is GTO (load) evidence."]
},
{
  id: "P-W9", src: "practice", topic: "walking",
  q: "TMS studies (Capaday et al., 1999) found that one ankle muscle is under more cortical control during walking than the extensor soleus. Which muscle was it?",
  opts: ["Gastrocnemius", "Tibialis anterior", "Quadriceps", "Hamstrings", "Gluteus maximus"],
  ans: 1,
  exp: "TMS had more effect on <b>tibialis anterior (TA)</b> activation than on the extensor soleus, suggesting some muscles are under more cortical control than others. (Small trains of motor cortex stimulation also caused short-latency changes in the locomotor pattern.)",
  why: ["Not the muscle reported.", null, "Not an ankle muscle.", "Not an ankle muscle.", "Not an ankle muscle."]
},
{
  id: "P-W10", src: "practice", topic: "walking",
  q: "Children with cerebral palsy (motor cortex damage) show stereotypical gait patterns. Which of the following is <b>NOT</b> one listed in lecture?",
  opts: ["Scissor gait", "Crouch gait", "Toe walking", "Wide-based ataxic gait", "All of the above were listed"],
  ans: 3,
  exp: "Cerebral palsy gait patterns listed: <b>scissor gait</b>, <b>crouch gait</b> and <b>toe walking</b>. Wide-based ataxic ('drunken sailor') gait comes from <b>cerebellar</b> damage.",
  why: ["Listed.", "Listed.", "Listed.", null, "Ataxic gait wasn't listed for CP."]
},
{
  id: "P-W11", src: "practice", topic: "walking",
  q: "The control of walking was described as involving three general areas of interest. Which option lists them?",
  opts: ["Central pattern generators; afferent input; descending control from higher centers", "Reflexes; vision; hearing", "Muscle spindles; GTOs; Pacinian corpuscles", "Frontal lobe; parietal lobe; occipital lobe", "Stance; swing; stumble"],
  ans: 0,
  exp: "The three general areas are: <b>Central Pattern Generators</b>, <b>afferent input</b> to regulate the pattern and adapt it to different situations, and <b>descending control from higher centers</b> (brainstem, cerebellum, basal ganglia, cerebrum). Walking is described as a <b>semi-autonomous</b> function.",
  why: [null, "Not the three areas.", "These are examples of afferent sources only.", "Cortical lobes aren't the framework.", "These are gait phases and a response, not control areas."]
},
{
  id: "P-W12", src: "practice", topic: "walking",
  q: "A patient with Parkinson's disease has trouble starting to walk and sometimes 'freezes' mid-stride. Which structure's damage is most responsible?",
  opts: ["Cerebellum", "Basal ganglia", "Spinal CPG", "Dorsal root ganglion", "Primary visual cortex"],
  ans: 1,
  exp: "Parkinson's disease damages the <b>basal ganglia</b>, which play an important role in <b>initiating</b> locomotion. Patients often show off-phase gait or <b>gait freezing</b>.",
  why: ["Cerebellar damage causes ataxic, wide-based gait.", null, "The spinal CPG isn't the primary site of Parkinson's damage.", "The DRG contains sensory cell bodies.", "Not related to gait initiation."]
},

/* ===================== MOVEMENT MECHANICS ===================== */
{
  id: "P-M1", src: "practice", topic: "mech", img: "images/body-planes.png",
  q: "Using the diagram above, a person doing jumping jacks raises and lowers their arms out to the side. This motion occurs mainly in which plane?",
  opts: ["A (sagittal)", "B (coronal)", "C (transverse)", "None; it is a 3D twisting motion", "A and C equally"],
  ans: 1,
  exp: "Raising the arms out to the side (abduction/adduction) moves them parallel to the <b>coronal (frontal)</b> plane, plane B, which divides the body into front and back.",
  why: ["Sagittal-plane motion is forward/backward, like a biceps curl or walking.", null, "Transverse-plane motion is rotation, like turning the trunk.", "Jumping-jack arm motion stays mostly in one plane.", "It isn't sagittal or transverse."]
},
{
  id: "P-M2", src: "practice", topic: "mech",
  q: "Using standard anatomical directional terms from class, which statement is correct?",
  opts: ["The elbow is distal to the wrist", "The elbow is proximal to the wrist", "The head is caudal to the hips", "The spine is ventral to the sternum", "The thumb is medial in anatomical position"],
  ans: 1,
  exp: "<b>Proximal</b> = closer to the trunk/attachment; <b>distal</b> = farther. The elbow is closer to the shoulder than the wrist, so it's <b>proximal</b> to the wrist. Cranial = toward the head, caudal = toward the tail; dorsal = back, ventral = front.",
  why: ["It's reversed: the wrist is distal to the elbow.", null, "The head is cranial to the hips.", "The spine is dorsal (posterior) to the sternum.", "In anatomical position (palms forward) the thumb is lateral."]
},
{
  id: "P-M3", src: "practice", topic: "mech",
  q: "When choosing a model for each joint in a link segment analysis, which pairing matches what was presented in class?",
  opts: ["Elbow: 3D ball-and-socket; Hip: 2D pin joint", "Elbow: 2D pin joint; Hip: 3D ball-and-socket; Ankle: complex rotational motion", "Ankle: simple 2D pin joint; Hip: rigid weld", "All joints should be modeled as ball-and-socket", "All joints should be modeled as 2D pin joints"],
  ans: 1,
  exp: "Humans move in 3D and different joints provide different degrees of freedom, so we must make informed choices: <b>elbow ≈ 2D pin joint</b>, <b>hip ≈ 3D ball-and-socket</b>, <b>ankle = complex rotational motion</b>. Vertebrae are also complex.",
  why: ["The elbow and hip are swapped.", null, "The ankle has complex rotation, and the hip moves in 3D.", "Over-modeling the elbow ignores its mostly single-axis motion.", "Under-models the hip and ankle."]
},
{
  id: "P-M4", src: "practice", topic: "mech",
  q: "In the 'body as a simple machine' model, which statement is correct?",
  opts: ["Muscles can push and pull on bones", "Muscles are contractile 'pulling actuators' that pull on body segments (linkages), causing rotation about joints, represented as a joint moment", "Joints generate force on their own", "Body segments are modeled as flexible springs only", "Muscles act along the joint axis, producing no moment"],
  ans: 1,
  exp: "Linkages and joints: muscles are contractile <b>pulling actuators</b>; they pull on body segments (linkages), and segments <b>rotate about joints</b>. The net effect is represented as a <b>joint moment</b> (torque), like a wrench turning a nut.",
  why: ["Muscles can only pull, not push.", null, "Joints are pivots; muscles produce the force.", "Link segment analysis treats segments as rigid linkages.", "Muscles act at a distance from the joint (moment arm) to produce torque."]
},
{
  id: "P-M5", src: "practice", topic: "mech",
  q: "What is the correct order of the five steps for solving a link segment problem presented in class?",
  opts: ["Draw FBD → Understand the system → Solve → Write equations → Substitute values", "Understand the system → Draw the free body diagram → Write equilibrium equations → Solve the system of equations → Substitute values and solve", "Substitute values → Write equations → Draw FBD → Understand the system → Solve", "Write equations → Draw FBD → Understand the system → Substitute values → Solve", "Understand the system → Substitute values → Draw FBD → Write equations → Solve"],
  ans: 1,
  exp: "1) <b>Understand the system</b> (how is the body moving and loaded, what joints?) → 2) <b>Draw the free body diagram</b> (separate segments at joints) → 3) <b>Write equilibrium equations</b> → 4) <b>Solve the system of equations</b> (find relationships, simplify) → 5) <b>Substitute values and solve</b> (anthropometrics).",
  why: ["You must understand the system before drawing it.", null, "Reversed.", "Equations come after the FBD.", "Values are substituted last."]
},
{
  id: "P-M6", src: "practice", topic: "mech",
  q: "For a <b>dynamic</b> link segment analysis, which set of equations is correct?",
  opts: ["ΣFx = 0, ΣFy = 0, ΣM = 0", "ΣFx = m·ax, ΣFy = m·ay, ΣM = I·θ̈", "ΣF = m·v, ΣM = I·θ̇", "ΣFx = m·g, ΣM = 0", "F = k·x for every segment"],
  ans: 1,
  exp: "<b>Static</b>: ΣFx = 0, ΣFy = 0, ΣM = 0. <b>Dynamic</b>: ΣFx = m·ax, ΣFy = m·ay, ΣM = I·θ̈ (moment of inertia times angular acceleration).",
  why: ["Those are the STATIC equations.", null, "Uses velocity instead of acceleration.", "Not Newton's second law.", "That's a spring law, not the link segment equations."]
},
{
  id: "P-M7", src: "practice", topic: "mech",
  q: "Using the class example, the elbow torque needed to hold Ducard is<br><b>M1 = m1·g·cos(θ1)·b + F<sub>HD</sub>·cos(θ1)·a</b><br>with m1 = 2.2 kg, g = 9.81 m/s², b = 0.34 m, F<sub>HD</sub> = 942 N, a = 0.50 m. If the forearm is held at θ1 = 60° below horizontal, what is M1?",
  opts: ["≈ 478 Nm", "≈ 239 Nm", "≈ 414 Nm", "≈ 0 Nm", "≈ 7.3 Nm"],
  ans: 1,
  exp: "With the numbers: m1·g·b = 2.2 × 9.81 × 0.34 ≈ 7.34 and F<sub>HD</sub>·a = 942 × 0.50 = 471, so the sum is ≈ <b>478.3 Nm</b> (the class result: M1 = 478.3·cosθ1). At 60°, cos 60° = 0.5, so M1 ≈ 478.3 × 0.5 ≈ <b>239 Nm</b>.",
  why: ["That's the torque at θ1 = 0° (forearm horizontal).", null, "That uses sin 60° (0.866) instead of cos 60°.", "Zero only when the forearm hangs vertical (θ1 = 90°).", "That's only the forearm's own weight term, without Ducard."]
},
{
  id: "P-M8", src: "practice", topic: "mech",
  q: "In the class model, M1 = 478.3·cos(θ1) Nm, where θ1 is the forearm's angle from horizontal. At which forearm position is the required elbow torque the <b>smallest</b>?",
  opts: ["Forearm horizontal (θ1 = 0°)", "Forearm at 30°", "Forearm at 45°", "Forearm hanging vertically (θ1 = 90°)", "The torque is the same at every angle"],
  ans: 3,
  exp: "Torque = force × perpendicular moment arm. When the forearm is vertical, the weights act along the segment, so the moment arm (and cos 90°) is <b>zero</b>, giving zero torque. Torque is <b>largest</b> when the forearm is horizontal (cos 0° = 1).",
  why: ["Horizontal gives the MAXIMUM torque.", "cos 30° ≈ 0.87, still large.", "cos 45° ≈ 0.71.", null, "Torque depends on cos θ1."]
},
{
  id: "P-M9", src: "practice", topic: "mech",
  q: "Using the anthropometric proportion from class, forearm + hand length is <b>a = (0.630 − 0.357) × H</b>. For a person who is H = 1.60 m tall, a ≈ ?",
  opts: ["0.29 m", "0.44 m", "0.57 m", "1.01 m", "0.50 m"],
  ans: 1,
  exp: "0.630 − 0.357 = 0.273. Then 0.273 × 1.60 m ≈ <b>0.437 m ≈ 0.44 m</b>. (For Bruce Wayne at 1.83 m, a ≈ 0.50 m.)",
  why: ["That's 0.18 × H; check the subtraction.", null, "That's 0.357 × H (only the second term).", "That's 0.630 × H (only the first term).", "That's the result for H = 1.83 m."]
},
{
  id: "P-M10", src: "practice", topic: "mech",
  q: "A researcher wants to estimate the segment masses of a 7-year-old child using a 50th-percentile adult male anthropometric table. What is the main concern raised in class?",
  opts: ["Anthropometric tables only list heights", "You must understand the population you are analyzing and the anthropometric data you are using, and whether they make sense together", "Children don't have measurable segment masses", "Anthropometric tables are only for dynamic analyses", "There is no concern; one table fits everyone"],
  ans: 1,
  exp: "There are many anthropometric data sets. Class disclaimer: <b>understand the population you are analyzing, understand the anthropometrics you are using, and check that they make sense together</b>. A 50th-percentile adult male table likely doesn't represent a child's proportions.",
  why: ["Tables include segment lengths, masses, COM locations, etc.", null, "Their segment masses can be estimated with appropriate data.", "Tables are used in both static and dynamic analyses.", "People differ in size and proportions."]
},
{
  id: "P-M11", src: "practice", topic: "mech",
  q: "At the elbow joint between the forearm and upper arm free body diagrams, the joint reaction forces and moments satisfy R1x = −R2x, R1y = −R2y, and M1 = −M2. Which principle does this reflect?",
  opts: ["Newton's first law (inertia)", "Newton's third law: equal and opposite action-reaction at the shared joint", "Conservation of energy", "Hooke's law", "Bernoulli's principle"],
  ans: 1,
  exp: "When you separate segments at a joint, the forces and moment the forearm exerts on the upper arm are <b>equal and opposite</b> to those the upper arm exerts on the forearm (<b>Newton's third law</b>). That's how the forearm's load gets transmitted into the shoulder equation.",
  why: ["Inertia doesn't relate the forces on two connected segments.", null, "No energy balance is used here.", "That's for springs.", "That's fluid mechanics."]
},
{
  id: "P-M12", src: "practice", topic: "mech",
  q: "Using the class result M3 = 341.4·cos(θ2) + 478.3·cos(θ1) Nm, what is the shoulder torque when both the upper arm and forearm are horizontal (θ1 = θ2 = 0°)?",
  opts: ["≈ 341 Nm", "≈ 478 Nm", "≈ 820 Nm", "≈ 137 Nm", "0 Nm"],
  ans: 2,
  exp: "With both cosines equal to 1: M3 = 341.4 + 478.3 ≈ <b>819.7 Nm</b>. The shoulder must hold its own segment's load <i>plus</i> everything transmitted from the elbow (including M1).",
  why: ["That leaves out the elbow moment M1 that is transmitted to the shoulder.", "That's M1 only.", null, "That subtracts instead of adds.", "Only if both segments hung vertically."]
}
];
