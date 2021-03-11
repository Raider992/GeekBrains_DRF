const fetchRequest = async (url, method='GET', data={}) => {
    if (!url) {
        console.log('Введите адрес запроса');
        return
    }
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}

export default fetchRequest