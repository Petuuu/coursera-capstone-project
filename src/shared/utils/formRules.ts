import { Rule } from 'antd/es/form';

export const requiredFieldRule = (fieldLabel: string): Rule[] => [{
    required: true,
    message: `Please input ${fieldLabel}!`,
}];