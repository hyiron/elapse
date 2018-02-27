import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fecthClassifies } from '../../redux/reducers/classify'
import Link from 'next/link'
import './styles/nav.scss'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { classifies = [] } = this.props
    if (classifies.length <= 0) {
      this.props.fecthClassifies()
    }
  }

  render() {
    const { classifies = {} } = this.props

    if (classifies.length <= 0) {
      this.props.fecthClassifies()
    }

    return(
      <nav className="el-nav">
        <div className="container">
          <ul className="el-nav__menu">
            <li className='el-nav__menu-item'>
              <Link as={`/p`} href={`/post`}>
                <a>全部</a>
              </Link>
            </li>
            {classifies.map((classify, i) => (
              <li key={i} className='el-nav__menu-item'>
                <Link as={`/p/${classify.value}`} href={`/post?id=${classify.value}`}>
                  <a>{ classify.title }</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ classify }) => ({  classifies: classify.classifies })

const mapDispatchToProps = dispatch => {
  return {
    fecthClassifies: bindActionCreators(fecthClassifies, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
