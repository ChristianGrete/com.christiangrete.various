const createBlankObj = Object.create.bind( Object, null )
const getObjKeys = Object.keys
const freezeObj = Object.freeze
const prefixPattern = /^data-\S+$/i

function getDataAttrsFromProps ( $propsObj ) {
  const _attrs = createBlankObj()

  getObjKeys( $propsObj ).filter( $key => {
    if( prefixPattern.test($key) )
      _attrs[ $key ] = $propsObj[ $key ]
  } )

  return freezeObj( _attrs )
}

export {
  getDataAttrsFromProps as default,
  getDataAttrsFromProps
}
