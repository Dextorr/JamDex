import React from 'react'

import Jam from '../components/Jam'
// import Cassette from './Cassette'

import '../scss/components/Tapes.scss'


class Tapes extends React.Component{
  constructor(){
    super()
    this.state = {
      playing: false,
      tapeId: ''
    }
    this.playTape = this.playTape.bind(this)
    this.stopTape = this.stopTape.bind(this)
  }

  componentDidMount(){
    const disabled = this.props.tapes.map((tape, i)=> false)
    this.setState({disabled})
  }

  playTape(tapeId){
    const disabled = this.props.tapes.map(()=> true)
    disabled[tapeId] = false
    console.log('disabled all tapes except ', tapeId)
    this.setState({disabled, tapeId, playing: true})
  }

  stopTape(){
    const disabled = this.props.tapes.map(()=> false)
    console.log('enabled all tapes')
    this.setState({disabled, tapeId: '', playing: false})
  }



  render(){
    // const { playing } = this.state
    if(!this.state.disabled) return null
    // console.log('tapes', this.state.disabled)
    // console.log('this.props.disableSave',this.props.disableSave)

    return(
      <section className='tapes'>
        <div className="tape-container">
          {this.props.tapes.map((tape, i)=>{
            return(
              <Jam
                key={i}
                {...tape}
                tape={true}
                disabled={this.state.disabled[i]}
                playTape={()=>this.playTape(i)}
                stopTape={this.stopTape}
                disableSave={this.props.disableSave}
              />
            )
          })}
        </div>
      </section>
    )
  }
}

export default Tapes
