package service;

/**
 * Created by polesskiy on 10.03.16.
 */
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public final class EMF {
    private static final EntityManagerFactory emfInstance =
            Persistence.createEntityManagerFactory("MYMATRICES");

    private EMF() {}

    public static EntityManagerFactory get() {
        return emfInstance;
    }
}
