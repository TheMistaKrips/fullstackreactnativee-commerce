import { FC } from "react";
import { IField } from "./field.interface";
import { Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";
import cn from 'clsx'

const Field = <T extends Record<string, any>>({
    control,
    rules,
    name,
    className,
    ...rest
}: IField<T>): JSX.Element => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({
                field: { value, onChange, onBlur },
                fieldState: { error }
            }) => (
                <>
                    <View className={cn('bg-white border w-full rounded-lg pb-4 pt-2.5 px-4 my-1', error ? 'border-red-500' : 'border-gray-400')}>
                        <TextInput autoCapitalize="none" onChangeText={onChange} onBlur={onBlur} value={(value || '').toString()} className="text-black text-base" placeholderTextColor='#6a6a6a' {...rest} />

                    </View>
                    {error && (
                        <Text className="text-red-500">{error.message}</Text>
                    )}
                </>
            )}
        />
    )
}

export default Field