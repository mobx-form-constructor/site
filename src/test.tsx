
export default observer(Field)
<Field
    field={form.fields.type}
    component={Radio}
    props={{
        name: 'type',
    }}
    value='all'
    type='radio'

>

    { t('filter.deposits')}
    </Field>
