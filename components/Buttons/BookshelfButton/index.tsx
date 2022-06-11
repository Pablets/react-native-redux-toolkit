import React from 'react'
import { PressableProps, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../../styles/colors'
import { bookshelfButtonStyles } from './style'

interface BookshelfButtonProps extends PressableProps {
  title?: string;
  type?: ButtonKind;
}
type ButtonKind = 'primary' | 'secondary';

const Primary = ( { title } :BookshelfButtonProps) => {
  return (
    <>
      <LinearGradient
        colors={ [colors.gradientPrimaryOne, colors.gradientPrimaryTwo] }
        start={ { x: 0.0, y: 1.0 } } end={ { x: 1.0, y: 1.0 } }
        style={ bookshelfButtonStyles.grediant }
      >
        <TouchableOpacity>
          <Text style={ bookshelfButtonStyles.buttonTextPrimary }>
            { title }
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  )
}

// Refactor this, reusing code

const Secondary = ({ title } :BookshelfButtonProps) => {
  return (
    <>
      <LinearGradient
        colors={ [colors.gradientPrimaryOne, colors.gradientPrimaryTwo] }
        start={ { x: 0.0, y: 1.0 } } end={ { x: 1.0, y: 1.0 } }
        style={ bookshelfButtonStyles.grediant }
      >
        <TouchableOpacity style={ bookshelfButtonStyles.buttonContainer2 }>
          <Text style={ bookshelfButtonStyles.buttonTextSecondary }>
            { title }
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  )
}

const renderButton = (bookshelfButtonProps : BookshelfButtonProps) => {
  const { type, title } = bookshelfButtonProps
  switch(type) {
  case 'primary' :
    return <Primary title={ title ?? '' }/>
  case 'secondary' :
    return <Secondary title={ title ?? '' }/>
  }
}

export const BookshelfButton = ( bookshelfButtonProps: BookshelfButtonProps) => {
  return (
    <>
      { renderButton(bookshelfButtonProps) }
    </>
  )
}
