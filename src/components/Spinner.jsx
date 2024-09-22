import { FadeLoader } from 'react-spinners'

const override = {
  display: 'block',
  margin: '100px auto',
}

const Spinner = ({ loading }) => {
  return (
    <FadeLoader
      color="#3db2c0"
      loading={loading}
      size={150}
      cssOverride={override}
    />
  )
}

export default Spinner
