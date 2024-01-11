import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "../welcome/welcome.style";

const Popularjobs = () => {
    const router = useRouter()
    const {data, isLoading, error} = useFetch("search", {
        query: 'React developer',
        num_pages: '1'
    })

    const [selectedJob, setSelectedJob] = useState();

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`)
        setSelectedJob(item.job_id)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}> Popular Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}> Show all</Text>
                </TouchableOpacity>
                </View>
            </View>
    )
}