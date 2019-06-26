# General Assembly Project 4 : A Full-Stack SQL Application

#### Project Members:
- [Dexter De Leon](https://github.com/Dextorr)
- [James Benson](https://github.com/jjbenson85)

#### Timeframe:
7 days

## Technologies used
* React.js
* Node.js
* Tone.js
* JavaScript (ES6) / HTML5 / SCSS
* Git / GitHub
* PostgreSQL / Flask
* BCrypt & Session Auth
* SCSS
* Chai/Mocha/Enzyme
* Bluebird
* Axios


## Installation
1. Clone or download the repo
1. ```yarn``` to install JavaScript packages
1. ```pipenv``` to install Python packages
1. ```yarn seed``` to create initial data for the database
1. ```yarn run build```
1. ```yarn run start```
1. Open on your browser at `http://localhost:4000`

### Our Application: JamDex - Let's make some jams!

![JamDexMyJam](https://user-images.githubusercontent.com/34242042/55162463-c9bf2100-515f-11e9-8760-4fbf5fc3dea8.gif)



You can find a hosted version [here.](http://jamdex.herokuapp.com/)


### Project overview

**JamDex** is an online music creation and sharing tool. It was developed by the two of us for our final project on the Web Development Immersive course at General Assembly.

It was created by **Jam**es Benson and myself, **Dex**ter De Leon. We decided on the name of the project as it was both a portmanteau of our names and an apt description of the project itself as an in**dex** of **jam** s.

Using two instruments, a synthesizer and drum-machine, users can create single four beat bar loops we call Jams. These Jams can then be ‘recorded’ to tape and shared with others.

### Instructions


1. When the site has loaded, you are presented with the Home page with a demo Jam. This Jam is Jam that currently has the most Applause (or likes, if you will). At this point the instruments are fully interactive and you can play around with the instrument settings, but you cannot save Jams without being registered.
  ![JamDex Home](https://user-images.githubusercontent.com/34242042/55037422-9e301f80-5015-11e9-8dc1-0e992c75a766.png)

1. In order to be able to access a fully customisable and savable Jam, click ```Register``` at the top and enter your details.
  ![JamDex Register](https://user-images.githubusercontent.com/34242042/55037421-9e301f80-5015-11e9-9064-d5c846c5c447.png)


2. Once registered, the registration form will be replaced with the login form. Enter your details again to login.
  ![JamDex Login](https://user-images.githubusercontent.com/34242042/55037419-9d978900-5015-11e9-8c59-b6c73aec80cd.png)

3. The background will change colour, and you are presented with a blank Jam to play with.
  ![JamDex Blank](https://user-images.githubusercontent.com/34242042/55037418-9d978900-5015-11e9-983f-f3442b19905c.png)

4. Press the triangular play button at the bottom to preview your current Jam.
  ![JamDex Play](https://user-images.githubusercontent.com/34242042/55037417-9d978900-5015-11e9-8530-b5da17fb48f5.png)

5. Click on the ```Pitch``` button and then bars to change the pitch of the note at that step of the sequence.
  ![JamDex Pitch](https://user-images.githubusercontent.com/34242042/55037416-9d978900-5015-11e9-8220-3d381d07361b.png)

6. Click on the ```Velocity``` button to adjust the volume of each note. Zero volume means no note is played. This can be used to let the previous note last for longer.
  ![JamDex Velocity](https://user-images.githubusercontent.com/34242042/55037415-9d978900-5015-11e9-896a-b1078e0d2448.png)

7. Click on the ```DrumMachine``` button at the bottom left of the screen to change to the Drum Machine. Rows correspond to different sounds.
  1. Kick Drum
  2. Snare Drum
  3. Closed Hi-Hat
  4. Open Hi-Hat

  The coloured squares let you set the volume of each individual hit.
  - Red = Loud
  - Yellow = Medium
  - Green = Quiet

  Just select a colour then click on the grid to add that level to that sound.

  <!-- ![JamDex Drums](https://user-images.githubusercontent.com/34242042/55037414-9d978900-5015-11e9-9b4b-8e0732663188.png) -->
  ![JamDexDrums](https://user-images.githubusercontent.com/34242042/55162371-9aa8af80-515f-11e9-8434-7978f89b4ba3.gif)


8. When you are happy with your Jam, hit the red record button to 'record' your Jam to Tape. You will be redirected to the 'My Tapes' page. Here you can change the name of your Jam by clicking on the label and typing a new title. You can play any of your Jams by clicking the triangular play button below the corresponding tape.
  <!-- ![JamDex My Tapes](https://user-images.githubusercontent.com/34242042/55037413-9cfef280-5015-11e9-8e56-fde28c898054.png) -->
  ![JamDexMyTapes](https://user-images.githubusercontent.com/34242042/55162315-74830f80-515f-11e9-9811-5f72e54a1570.gif)


9. Click on the ```JamDex``` logo to go to the titular JamDex page. Here you will see all the Jams that users have created.

  You are able to listen to them and 'Applaud' them by clicking on the clapping hands icon. This can be done as many times as you like (but you can't applaud your own Jams!). The JamDex is ordered by the amount of Applause each Jam has. The most popular Jam is used as the default song on the Home page.
  <!-- ![JamDex All Tapes](https://user-images.githubusercontent.com/34242042/55037412-9cfef280-5015-11e9-93b4-5004ceecd83d.png) -->
  ![JamDexJamDex](https://user-images.githubusercontent.com/34242042/55162397-ab592580-515f-11e9-93ee-39a5f3c9b3ed.gif)

## Process
#### Ideation


I've loved music for my whole life. Consuming all types of music from a young age and later playing music myself as a grade 5 classical guitarist, as well as being a vocalist in a number of choirs, and occasionally taking part in open mics or competitions.

James pitched the idea to me, having a keen interest in synthesizers and music production since his university degree in Sound Design Technology. He showed me that he had previously built a Drum Machine using JavaScript and the Tone.js library and that we could do something similar for our final project. Given my own interest in music, I was immediately on board.

James wanted to create an application that had the best aspects of analogue synthesizers and analogue recording equipment and explained that you only work on one composition as a time, and once you record to tape, you can't go back! Which is what we aimed for our project to emulate.

Our plan was to start users off with a simple synth and then use in-app currency that could be exchanged for 'new' equipment. We decided we wanted to use an idea taken from the Medium app; applause.

Our Minimum Viable Product would be to have the ability to log-in, create a melody where the user could change the pitch and could turn notes on and off and have the melody save to the database where other users could 'Applaud' it.

We discussed ideas as to how the music could be saved, such as recording the audio potentially using the [MediaStream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API).

#### Experimentation

James had previously used the Tone.js library which is built on the WebAudio API and showed me a test app that he'd made with React to demonstrate how instruments could be synchronised.
 [James' Tone Practice GitHub Repo](https://github.com/jjbenson85/tone_practice)

  ![Tone.js practice](https://user-images.githubusercontent.com/34242042/55075055-de30ea00-5089-11e9-8e81-7db269ba77d1.png)

This app uses the recommended UI library called [Nexus](http://nexus-js.github.io/ui/). James mentioned that it was easy to set up, but that it is based on SVGs rather than CSS, and that it'd be difficult to get the interface to look exactly as we wanted, so we didn't use Nexus for the project. I suggested that we instead create our own interface for the instruments using SCSS to style HTML5 range inputs.

#### Design
##### Back-end

We started by describing our models and their relationships for the SQL database. We sketched out a quick crows foot diagram or Entity-Relationship Model.

![CrowsFeetDiagram](https://user-images.githubusercontent.com/34242042/55076470-5e0c8380-508d-11e9-9a1e-3212fa823a80.jpg)

This was a simple setup to reach MVP, with the potential to expand it for more instruments.

Our MVP Models were..
- User -> has many Jams.
- Jam -> belongs to one User but has many Synths.
- Synth -> belongs to one Jam but has many Beats.
- Beat -> belongs to one Synth and contains note data per beat.

As the project progressed and we reached our MVP goals we started to add more features and the ERD grew larger.

Our final ERD looks like this...
![JamDexERD](https://user-images.githubusercontent.com/34242042/55077869-b1340580-5090-11e9-9341-cf77c5e1af0e.png)

The main difference between the synthesizer and the drum machine was that the synthesizer can only play one note at a time which is known as being mono-phonic (that is why it is called MonoSynth). The drum machine however can play up to four different sounds at the same time (poly-phonic). These sounds need to be stored individually so a Poly model was created to store the Poly Beats. The poly beats are similar to the Synth beats but also contain information about which voice it belongs to.

(In retrospect, it may have been cleaner to create a generic Polyphonic Beat and for the mono synth just limit it to using one voice.)

To save the settings of the synth we needed somewhere to save the information in the Database, so we created the Settings model.






##### Front-end
###### Tone.js

One of the big problems of creating musical instruments using plain JavaScript is that it is difficult to time things accurately. The setTimeout and interval functions are only accurate to about 10ms and this variation can be heard, particularly if there is a lot of computation to do.

Tone.js solves this problem by assigning each audio event a precise time that it should occur. We just need to tell our events when we want them to happen and they will, even if the computer is busy.

Tone.js also comes with some pre-built instruments. You provide a trigger command with pitch, duration and the time you want them to trigger.

This made development of this project really simple, and meant we could focus on building an interface for these instruments.

![Tone MonoSynth](https://user-images.githubusercontent.com/34242042/55082122-fd834380-5098-11e9-86c0-14465d806b38.png)

![Tone Example](https://user-images.githubusercontent.com/34242042/55082249-3cb19480-5099-11e9-885f-2273954723c3.png)

![Tone Example](https://user-images.githubusercontent.com/34242042/55082392-8306f380-5099-11e9-8a40-9c64f8ba6977.png)


###### Instruments
The front end design was influenced by the music production program [Reason](https://www.propellerheads.com/en/reason).


![Reason](https://user-images.githubusercontent.com/34242042/55079266-bb0b3800-5093-11e9-8fe3-be746cbb526e.png)

It uses Skeumorphic design principles to represent analogue hardware.

We created (very) rough sketches of the instruments.
![MonoSynthSketch](https://user-images.githubusercontent.com/34242042/55079776-c9a61f00-5094-11e9-93ef-aaaac141f65b.png)
![DrumMachineSketch](https://user-images.githubusercontent.com/34242042/55079650-80ee6600-5094-11e9-99f7-20690da54a83.png)

We started work on the MonoSynth first. It was split into its sound generating component, 'MonoSynth.js', which takes triggers as props and creates sounds but does not render any visual elements.

The interface for the instrument is 'MonoSynthInterface.js'.

The idea behind keeping these separate was so that that depending on which synthesizer the user had 'purchased' they would get a different synth with different controls, but they would all run on the same sound engine.

In the end we only produced one interface, but the ground work is there for the future.

#### Division of labour

Given that James had already laid the groundwork with his Tone.js proof of concept app, he took care of the majority of the work with the sound engines and ther models and controllers.

I started off with creating an interface that could affect the settings of James' sound engines by using range inputs and formatting the settings data so that it could be saved to the database. I also worked on user authentication.

Though these were the main areas we each focused on, generally we swapped around as needed or pair-coded tougher problems.

#### Teamworking

We organised ourselves using a trello board, with columns for MVP (features), Issues, Potential Ideas, In Progress and Done.

We colour coded them per person and wether it was Front-End or Back-End.

![JamDex Trello](https://user-images.githubusercontent.com/34242042/55083865-1e00cd00-509c-11e9-9722-2a5e0c9ddefa.png)

We would have a casual meeting every morning to discuss what we had achieved and hoped to achieve for the day, but we sat next to each other all the time and had chats through out the project keeping each other updated.

We used GitHub to pool our work and had a few conflicts, but as we were sat so close and we could resolve these together.

## Challenges



###### Jam Playback

The 'Jam.js' component is the holder for each Jam's musical content. It is rendered as the interface to create the music on the 'My Jam' page. It is also rendered as a cassette on the 'My Tapes' and 'JamDex' pages.

The Jam Component is passed a prop called 'tape' which is either true or false.

If it is true the Jam component renders a Tape, otherwise it renders as a Jam

```
Jam.js
...
const isTape = !!this.props.tape
const isJam = !this.props.tape
...
return(
  <div className={...}>
    {isJam &&
    <div className={`jam-inner ...`}>
      ...
    </div>}
    {isTape &&
    <div className='tape-inner'>
      ...
    </div>}
  </div>
)
```

This system of using the Jam component to play back the Jams rather than creating a separate component, meant that we only had one Component to update and it made more sense to use that Component to both read and write each Jam's properties. It was also simpler than recording the audio to disk, as we would then need somewhere to host that file.

###### Synchronisation
The Jam components render the instruments' music engines and their interfaces. It passes props to these components from its state.

Functionally, the Jam component runs a Tone.js Sequence of 16 beats that loops infinitely. It cycles through its 16 beats, updating the beat and the time of that beat in the state. As the state has changed this causes the instrument components that it renders to update and trigger their sounds.


```
Jam.js

cponentDidMount(){

  ...

  //Save a refence to the component for the Sequence callback
  const component = this

  /***
  The callback argument 'beat' is the value stored in the array
  which is the 2nd argument to Tone.Sequence.
  Time is the ms accurate time that the next beat should happen.
  The beat length is decided by the 3rd argument to Tone.Sequence, '16n'.
  ***/

  this.loop = new Tone.Sequence((time, beat) => {

    //Update the tempo
    Tone.Transport.bpm.value = this.state.tempo

    //Update the state
    component.setState({transport: {beat, time}})

  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], '16n')
}
```

When the instrument receives a new prop it performs a componentDidUpdate function.

```
MonoSynth.js

componentDidUpdate(prevProps){

  ...

  //As this is called whenever state changes, whenever a change to state is made the note is triggered.
  //We prevent this by checking that the time value of the previous props is different to the new props
  if(this.props.time === prevProps.time) return

  const {pitch, duration, velocity} = this.props.noteInfo

  //If velocity is 0 we do not trigger a new note
  if(velocity==='0') {
    return
  }

  //The Tone.js expects velocity to be in the range of 0 to 1, but for nostalgia reasons our interface goes from 0 to 127
  const vel = velocity/127

  //Trigger the synth with this Beats note settings.
  this.synth.triggerAttackRelease(
    pitch,
    duration,
    this.props.time,
    vel
  )
}
```


###### Synth Settings

One of the biggest challenges was dealing with data from the PostgreSQL database and converting it into objects that we could use on the front end.

An example of this is the synth settings.

The Tone.js monosynth expects its settings to be passed in as an object which contains other objects.

![Tone Settings Object](https://user-images.githubusercontent.com/34242042/55085866-49d18200-509f-11e9-9855-42001cb2b698.png)

To get this data returned neatly from the back-end we would need to create new models. The ERD would then look like this...

![JamDexSettingsERD](https://user-images.githubusercontent.com/34242042/55086528-71751a00-50a0-11e9-8140-60653b782216.png)

Concerned with overcomplicating our database and our limited timeframe, James instead saved all the settings in the settings Model in the backend.

```
class SynthSetting(db.Model, BaseModel):

    __tablename__ = 'synth_settings'
    oscillator_type = db.Column(db.String(8), nullable=False, default='sawtooth')

    filter_Q = db.Column(db.Float, nullable=False, default=1)

    envelope_attack = db.Column(db.Float, nullable=False, default=0.01)
    envelope_decay = db.Column(db.Float, nullable=False, default=0.2)
    envelope_sustain = db.Column(db.Float, nullable=False, default=0.50)
    envelope_release = db.Column(db.Float, nullable=False, default=0.2)

    filterEnvelope_attack = db.Column(db.Float, nullable=False, default=0.2)
    filterEnvelope_decay = db.Column(db.Float, nullable=False, default=0.01)
    filterEnvelope_sustain = db.Column(db.Float, nullable=False, default=0.50)
    filterEnvelope_release = db.Column(db.Float, nullable=False, default=0.2)
    filterEnvelope_baseFrequency = db.Column(db.Float, nullable=False, default=150)

    ...
```


By naming the settings 'MODULE_CONTROL' where MODULE is the oscillator, filter, envelope or filter envelope and control is the setting to change for that module, we could then  unpack those settings to their respective objects on the front end.

```
unpackPythonSettings(settings){
const newSettings= {
  envelope: {},
  filterEnvelope: {},
  filter: {}

}
for (const python in settings){
  const pyArr = python.split('_')
  const mod = pyArr[0]
  const cntrl = pyArr[1]
  //See comments
  if (pyArr[2]) {
    delete settings[python]

    continue
  }

  const val = settings[python]
  const currentMod = {...newSettings[mod], [cntrl]: val}
  newSettings[mod] = {...currentMod}

}

return newSettings

}
```
These settings were then passed into the synthesizer.

Whilst this did work and allowed our project to be perfectly functional for presentation, it came with a few shortcomings:

1. It creates extra work for the CPU which could have been avoided.

2. It doesn't feel like a good solution

3. It has a weird bug which we never fully understood!

The bug would create copies of the setting rather than update the settings, then create copies of the copies etc and would fill up the console with messages.

This code stopped the error from propagating.
```
if (pyArr[2]) {
  delete settings[python]
  continue
}
```

In hindsight it may have been neater to include the additional settings models, but it was a good experience to see how things can go wrong!

## Wins

###### Styling

I was very proud of the styling of the site, I aimed for a retro tech vibe, which I think turned out really well. It was really fun making HTML5 form inputs look interesting but also function as intuitively as possible.

James also had the idea to repurpose some CSS resources to really give the virtual instruments that retro feel.

###### Playability

Even though the loop only lasts for one bar, it is really easy to come up with something musical, and the experience of playing with it is really fun. Honestly we did spend quite a bit of time playing around with new features after we added them!

###### Sound quality

Given the limited timeframe we had to work with, I think that we made something that could produce some really interesting little Jams. It was also a lot of fun to learn about synths and making electronic music.

## Future features

###### Rebuild
Though it was satisfying to get the project to work after the difficulties we encountered, any further work would most likely need to be reconsidered from the ground up. It'd be more effective to use what we'd learned from our struggles to build something new, rather than trying to backpedal some of the "quick fixes" we used to bypass some of the stranger issues we encountered.

###### Longer loops
It would be great to be able to work with longer, more complex compositions. Also to work on our original plan of allowing users to eventually choose from multiple instruments including Polyphonic Synthesizers.


###### Shop
The intial idea of gamifying the experience and letting users earn credits through "applause" to purchase additional synths would be great to include in a rework of this project.


###### Sharing
Implementing some social features like following users so you can see their newest Jams, maybe even collaborating on Jams with a friend would be interesting features to try.
